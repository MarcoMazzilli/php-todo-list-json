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
        log(){
            console.log("mi hai cliccato")
        },
        readApi(){
            axios.get('server.php')
            .then( result => {
                this.taskList = result.data
                console.log('Risultato chiamata Api --->',result.data)
                console.log('Risultato',this.taskList)
            })
        },

        deleteTask(task,index){
            if (task.flag) {
                 // Qui devo passare l'indice per fare lo splice di php
                this.errorMessage = "Task rimossa con successo !"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }else{
                this.errorMessage = "Devi prima contrassegnare la task !!"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }
        },

        createNewObj(){

            const obj = {
                message : this.newMessageTask,
                flag : false
            }

            if (this.newMessageTask.length >= 5) {
                //Qui passo il testo che valorizza l'elemento che devo puishare in php
                this.newMessageTask = ""
            }else {
                this.errorMessage = "La task deve contenere almeno 5 caratteri"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }

        }
    },
    mounted(){
        this.readApi()
    }

}).mount('#app')