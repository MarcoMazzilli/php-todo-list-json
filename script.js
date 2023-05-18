const {createApp} = Vue;

createApp({
    data(){
        return{
        taskList : [],

        errorMessage : "",
        
        newMessageTask : "",
        
        }
    },
    methods: {

        readApi(){
            axios.get('server.php')
            .then( result => {
                this.taskList = result.data
                console.log('Risultato chiamata Api --->',result.data)
                console.log('Risultato',this.taskList)
            })
        },

        // deleteTask(task,index){
        //     if (task.flag) {
        //          // Qui devo passare l'indice per fare lo splice di php
        //         this.errorMessage = "Task rimossa con successo !"
        //         setTimeout(() => {
        //             this.errorMessage = ""
        //         }, 2000);
        //     }else{
        //         this.errorMessage = "Devi prima contrassegnare la task !!"
        //         setTimeout(() => {
        //             this.errorMessage = ""
        //         }, 2000);
        //     }
        // },

        createNewObj(){

            
            if (this.newMessageTask.length >= 5) {
                
                newTask = this.newMessageTask;
                const dato = new FormData()
                dato.append('newOne', newTask)

                axios.post('server.php', dato)
                .then(result => {
                    this.newMessageTask = '';
                    this.taskList = result.data;
                    console.log('Risultato chiamata in post',result.data)
                    console.log('Array this.taskList', this.taskList);
                })

                this.newMessageTask = ""
            }else {
                this.errorMessage = "La task deve contenere almeno 5 caratteri"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }

        },
    },
    mounted(){
        this.readApi()

    }

}).mount('#app')