const { createApp, ref } = Vue

createApp({
  setup() {


    const letters = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseLetters = letters.toUpperCase()
    const numbersList = "0123456789"
    const symbolsList = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"
    const l = letters.split("")
    const u = uppercaseLetters.split("")
    const n = numbersList.split("")
    const s = symbolsList.split("")
    let dict = []

    let levels = document.getElementsByClassName("level")


    let upper = ref(true)
    let lower = ref(true)
    let numbers = ref(true)
    let symbols = ref(true)
    
    
    const rangeMax =  15;
    const minStrength = 1
    const maxStrength = 8
    
    let range = ref(8)
    let count = ref(range.value)
    let strengthBars = ref(0)
    let password = ref("")
    let passwordStrength = minStrength

    
    function change(){
      count.value = range.value
    }
    
    function changeUpperCase() {
      upper = !upper
    }
    function changeLowerCase() {
      lower = !lower
    }
    function changeNumbers() {
      numbers = !numbers
    }
    function changeSymbols() {
      symbols = !symbols
    }

    function checkStrength(){
      upper ? passwordStrength = passwordStrength + 1 :  0
      lower ? passwordStrength = passwordStrength + 1 :  0
      numbers ? passwordStrength = passwordStrength + 1 :  0
      symbols ? passwordStrength = passwordStrength + 1 :  0
      
      count.value >= 8 ? passwordStrength = passwordStrength + 1 :  0
      count.value >= 12 ? passwordStrength = passwordStrength + 1 :  0
      count.value == 15 ? passwordStrength = passwordStrength + 1 :  0
      
      strengthBars.value = passwordStrength
      passwordStrength = minStrength

      for (let i = 0; i < levels.length; i++) {
        levels[i].style.background="#24232b"
        for (let j = 0; j < strengthBars.value; j++) {
          if(strengthBars.value == 3 || count == 8){
            levels[j].style.background="#cc3300"
          }
          if(strengthBars.value >= 4 && strengthBars.value <= 6 || count <= 8 && count >= 12){
            levels[j].style.background="#ffcc00"
          }
          if(strengthBars.value >= 7 && strengthBars.value <= 8 || count == 15){
            levels[j].style.background="#a4ffaf"
          }
        }
      }
    }
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
    function createDict(){
      if(lower) {dict = dict.concat(l)}
      if(upper) { dict = dict.concat(u)}
      if(numbers) {dict = dict.concat(n)}
      if(symbols) { dict = dict.concat(s)}

    }
    
    function generatePassword() {
      createDict()
      checkStrength()
      
      
      let pass = ""
      
      for (let index = 0; index < range.value; index++) {
        pass += dict[getRandomInt(dict.length)]
      }
      
      password.value = pass
      dict = []
      
    }

    return {
      maxStrength,
      password, 
      count, 
      
      range,
      rangeMax,

      change,
      checkStrength, 
      changeUpperCase,
      changeLowerCase,
      changeNumbers,
      changeSymbols, 
      generatePassword,
    }
  }
}).mount('#app')