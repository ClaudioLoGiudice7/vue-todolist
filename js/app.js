// ** Bonus:**
// 1 - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

// Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true / false) che indica se il todo è stato fatto oppure no

console.log("Vue ok", Vue);

const app = Vue.createApp({
    data() {
        return {
            todos: [
                { text: "Andare a fare la spesa", done: true },
                { text: "Andare dall'oculista", done: false },
                { text: "Andare ad Hogwarts", done: true },
                { text: "Imparare le maledizioni senza perdono", done: false },
                {
                    text: "Avere ragione in una discussione con mia madre", done: false
                    // Spoiler: non succederà mai...
                }
            ],

            newTodo: "",
        }
    },

    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        addTodo() {
            this.todos.push({
                text: this.newTodo,
                done: false,
            })
        }
    }
})

app.mount("#root");

// ** MILESTONE 3 **
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.