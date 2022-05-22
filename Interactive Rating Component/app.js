const { createApp, ref } = Vue

createApp(
    {
        data(){
            return{
                currentRating: 0,
                submitted: false,
                ratings:[
                    {
                        value: 1,
                    },
                    {
                        value: 2,
                    },
                    {
                        value: 3,
                    },
                    {
                        value: 4,
                    },
                    {
                        value: 5,
                    },
                ]
            }
        },
        methods: {
            selectRating(rating){
                this.currentRating = rating;
            },
            onSubmit(){
                this.submitted = !this.submitted;
            },
        }
    }
).mount("#app")