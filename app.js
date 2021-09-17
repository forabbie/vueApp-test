// console.log('hello');

const app = Vue.createApp({
    // template: '<h2> This is Template </h2>'
    data() {
        return {
            url: 'http://',
            showBooks: true,
            showFavBooks: true,
            showMouseEvents: false,
            books: [
                { title: 'Old Greek Stories', author: 'James Baldwin', img: '/assets/1.jpg', isFav: true },
                { title: 'Dream Pyschology', author: 'Sigmund Freud', img: '/assets/2.jpg', isFav: false  },
                { title: 'Pride and Prejudice', author: 'Jane Austen', img: '/assets/3.jpg', isFav: true  },
                { title: 'Emma', author: 'Jane Austen', img: '/assets/4.jpg', isFav: false  },
                { title: 'The Tempest', author: 'William Shakespeare', img: '/assets/5.jpg', isFav: false  },
                { title: 'To Kill a Mockingbird', author: 'Harper Lee', img: '/assets/6.jpg', isFav: false  },
                { title: '1984', author: 'George Orwell', img: '/assets/7.jpg', isFav: false  },
                { title: 'Harry Potter and the Philosopher’s Stone', author: 'J.K. Rowling', img: '/assets/8.jpg', isFav: true  }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBookTitle(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
        toggleFavBooks(){
            this.showFavBooks = !this.showFavBooks
        },
        toggleMouseEvents(){
            this.showMouseEvents = !this.showMouseEvents
        },
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
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')