// construtor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 
    }

    // get summary
    Book.prototype.getsummary = function() {
        return`${this.title} is written by ${this.author} in ${this.year}`

    }

    // get age
    Book.prototype.getage = function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old `
    }


    // Revise / change year
    Book.prototype.revise = function (newYear) {
        this.year = newYear;
        this.revised = true
    }
    // Instatiate an Object
    const book1 = new Book("book one","john boe","2010");
    const book2 = new Book("book two","jane Doe","2012");
    
    
    // console.log(book2.getage());
    console.log(book2);
    book2.revise('2018')
    console.log(book2);