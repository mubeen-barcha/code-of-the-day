class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  }

  getage () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old `;
  };

  revise(newYear) {
    this.year = newYear;
    this.revised = true
  }

  static topbookStore (){
      return" barnes & noble"
  }
}

// instantiate Object
const book1 = new Book("book one ", "khoon", "2013");

console.log(book1);
book1.revise('2018');
console.log(book1);


console.log(Book.topbookStore());