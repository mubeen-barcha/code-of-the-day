// construtor

function Book(title, author, year) {
this.title = title;
this.author = author;
this.year = year; 

this.getsummary = function() {
    return`${this.title} is written by ${this.author} in ${this.year}`
}
}

// Instatiate an Object
const book1 = new Book("book one","john boe","2020");
const book2 = new Book("book two","jane Doe","2022");


console.log(book1.getsummary());