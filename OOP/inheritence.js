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

// magazine constructor
    function Magazine(title, author, year,month) {
     Book.call(this, title, author, year);

     this.month = month;

    }


    //  inherit prototype
    Magazine.prototype = Object.create(Book.prototype);

    // instantiate Magazine Object
    const mag1 = new Magazine('mag one', 'john doe', '2018', 'jan');


    // Use magazine constructor

    Magazine.prototype.constructor = Magazine;


    console.log(mag1.getsummary())