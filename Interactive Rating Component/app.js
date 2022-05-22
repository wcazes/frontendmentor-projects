const { createApp, ref } = Vue

createApp(
    {
        data(){
            return{
                currentRating: 0,
                submitted: false,
                isDisabled: true,
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
                this.isDisabled = !this.isDisabled
            },
            onSubmit(){
                this.submitted = !this.submitted;
                this.isDisabled = !this.isDisabled
            },
        }
    }
).mount("#app")