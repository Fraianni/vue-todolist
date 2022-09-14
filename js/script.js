

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

        remove_todo(todo) {
            console.log(todo);
            let first_part = this.list.slice(0, todo);
            let second_part = this.list.slice(todo + 3);
            console.log(first_part);
            console.log(second_part);


            this.list = [...first_part, ...second_part];
        }


    }
});