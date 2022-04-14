const books = {
    name: "book1",
    author: "john bhai",
    year: "2022",
    getsummary: function() {
        return`${this.name} is written by ${this.author} in ${this.year}`
    }
}
console.log(books.getsummary())
console.log(Object.values(books))
console.log(Object.keys(books))
console.log(Object.entries(books))