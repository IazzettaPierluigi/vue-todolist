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

}

}).mount('#app')