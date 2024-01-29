// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

const { createApp } = Vue

createApp({
data() {
    return {
    todos:[
        // {
        //     text:'portare fuori il cane',
        //     done: false,
        // },

        // {
        //     text:'lavare i piatti',
        //     done: false,
        // },

        // {
        //     text:'fare la spesa',
        //     done: false,
        // },
    ]
    }

    //variabile da utilizzare col v-model
    nuovoTodo = ''
},

methods:{
    //funzione per aggiungere il text del input al nostro array
    addToDo(){
        this.todos.push({
            text: this.nuovoTodo,
            done: false,
        })

        this.nuovoTodo = ''
    },

    //funzione per rimuovere il todo
    removeToDo(index){
        this.todos.splice(index, 1)
    },

    //funzione per segnare il completamento del task
    doneTask(index) {
        this.todos[index].done = !this.todos[index].done;
    }


}

}).mount('#app')