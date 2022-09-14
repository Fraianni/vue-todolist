

const app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                text: 'Andare al barbiere',
                done: false
            },
            {
                text: 'Ordinare la pizza',
                done: false
            },
            {
                text: 'Chiamare Antonio',
                done: true
            },
            {
                text: 'Andare al supermercato',
                done: true
            },
            {
                text: 'Tagliare il prato',
                done: false
            }

        ],
        new_todo: ''
    },


    methods: {

        remove_todo(todo_position) {
            let first_part = this.list.slice(0, todo_position);
            let second_part = this.list.slice(todo_position + 1);
            this.list = [...first_part, ...second_part];
        },

        add_todo() {
            let clean_todo = { text: this.new_todo.trim(), done: false };
            this.new_todo = '';
            if (clean_todo.text.length > 0) {
                this.list.push(clean_todo);
            }
        },

        change_done(todo) {
            todo.done = !todo.done;
        }


    }
});