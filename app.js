// console.log('hello');

const app = Vue.createApp({
    // template: '<h2> This is Template </h2>'
    data() {
        return {
            url: 'http://',
            showBooks: true,
            showMouseEvents: false,
            books: [
                { title: 'Old Greek Stories', author: 'James Baldwin', img: '/assets/1.jpg' },
                { title: 'Dream Pyschology', author: 'Sigmund Freud', img: '/assets/2.jpg' },
                { title: 'Pride and Prejudice', author: 'Jane Austen', img: '/assets/3.jpg' }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBookTitle(){
            this.showBooks = !this.showBooks
        },
        toggleMouseEvents(){
            this.showMouseEvents = !this.showMouseEvents
        },
        // changeTitle(changedTitle){
        //     this.title = changedTitle
        // }
        handleEvent(e, data){
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
})

app.mount('#app')