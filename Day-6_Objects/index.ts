//! Task/Activities

//? Activity 1:Object Creation And Access

//* Task 1:Create An Object Representing A Book,
//* Properties Like Title,Author And Year,
//* Log Object To The Console.

let book = {
    title : "Qaidi No 804",
    Author : "Imran Khan",
    year : 2024
};
console.log(book);

//* Task 2:Access And Log The Title,
//* And Author Properties Of Book.

console.log(book.title);
console.log(book.Author);


//? Activity 2:Object Method

//* Task 3:Add A Method To The Book Object,
//* That Returns A String With The Book's Title,
//* And Author, Log The result Of Calling This Method.

let book1 = {
    title : "Qaidi No 804",
    Author : "Imran Khan",
    year : 2024,
    returnMethod : function (){
        return `${this.title} by ${this.Author}`
    }
};

console.log(book1.returnMethod());

//* Task 4:Add A Method To The Book Object,
//* That Takes A Perameter (Year) And Update,
//* The Book's Year Property,
//* Then Log Updated Object.

let book2 = {
    title : "Qaidi No 804",
    Author : "Imran Khan",
    year : 2024,
    returnMethod : function (){
        return `${this.title} by ${this.Author}`
    },
    updateYear : function (year:number){
        book2.year = year;
    }
};

book2.updateYear(2023);
console.log(book2);


//? Activity 3:Nested Object

//* Task 5:Create A Nested Object Representing,
//* A Library With Properties Like Name And Books,
//* (An Array Of Book Objects),
//* Log The Library Object TO The Console.


let library = {
    name: "Hamza Nasir",
    books: [
        {
            title : "Iron Man",
            Author : "Tony Stark",
            year : 2014, 
        },
        {
            title : "Hulk",
            Author : "Bruce Banner",
            year : 2010,
        },
        {
            title : "Wanda",
            Author : "Scalar witch",
            year : 2010,
        }
    ]
};
console.log(library);


//* Task 6:Access And Log The Name Of The Library,
//* And The Title Of All Books In The Library.

console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);


//? Activity 4:The THIS Keyword

//* Task 7:Add A Method To The BOok Object,
//* That Uses The THIS Keyword To Return,
//* A String With The Book Title And Year,
//* Log The Result calling This Method.

let book3 = {
    title : "Qaidi No 804",
    Author : "Imran Khan",
    year : 2024,
    returnMethod : function (){
        return `${this.title} by ${this.Author}`
    },
}

console.log(book3.returnMethod());

//? Activity 5:Object Iteration

//* Task 8:Use A For...in Loop To Iterate Over The Properties Of Book,
//* Object And Log Each Property And ITs Value.

let book4 = {
    title : "Qaidi No 804",
    Author : "Imran Khan",
    year : 2024,
};

for(let i in book4){
    // if(book4.hasOwnProperty(i))
    console.log(`${i} : ${book4[i]}`);
    
};


//* Task 9:Use Object.Keys And Object.Values Methods,
//* To Log All The Keys And Value Of The Book Object.


let keyResult = Object.keys(book4);
let valueResult = Object.values(book4);

console.log(keyResult,valueResult);

//! Achievements

//* Create An Manuplate Object with Properties And Method
//* Understand And Use THIS Keyword In Object Method,
//* Work With Nested Object And Arrays Of Objects.
//* Itrate Over An Object Properties Using Loops And Builtin Method.

















































































