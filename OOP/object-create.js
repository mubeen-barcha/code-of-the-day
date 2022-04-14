// Object of Proto

const bookProtos = {
  getSummary: function () {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years
     old `;
  },
};


// create object
// const book1 = Object.create(bookProtos);
// book1.title = "Book one"
// book1.author = "khoon"
// book1.year = "2013"


const book1 = Object.create(bookProtos,{
    title: {value: "book one"},
    author: {value: "khoon"},
    year: {value: "2013"}
});



console.log(book1);