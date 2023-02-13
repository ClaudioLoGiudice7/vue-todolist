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
        },

        toggleTodo(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    }
})

app.mount("#root");