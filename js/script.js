

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
        order: 0
    },


    methods: {

        remove_todo(todo_position) {
            let first_part = this.list.slice(0, todo_position);
            let second_part = this.list.slice(todo_position + 1);
            console.log(first_part);
            console.log(second_part);


            this.list = [...first_part, ...second_part];
        }


    }
});