//!   Task/Activity

//? Activity 1: if-Else Statement

//* Task 1:Write A Program To Check,
//* if A Number Is Positive,NAgative Or Zero,
//* Log The Result On The Console.

let num1 = 34;

if(num1 === 34){
    console.log("Number Is POsitive!");
}else if(num1 === -34){
    console.log("Number Is Negative!");
}else if(num1 === 0){
    console.log("Number Is Zero!");
}

//* Task 2:Write A Program To Check,
//* if A Person Is Eligible To Vote(age >= 18),
//* Log The Result On The Console.

let personAge = 23;

if(personAge >= 18){
    console.log("ELigible!");
}else{
    console.log("Not Eligible!");
}

//? Activity 2: Nested If-Else Statement

//* Task 3:Write A Program To find,
//* The Largest OF Three Numbers Using,
//* Nested if-Else Statement.

let number = Math.max(23,54,855,732,540);
console.log(number);

if(number != 23){
    if(number != 54){
        if(number != 855){
            if(number != 732){
                if(number != 540){
                    console.log("Cant Find!");
                }
            };
        };
    };
}else{
    console.log(`is The Largest Number.`);
}

//? Activity 3: Switch Case

//* Task 4:Write A Program That Uses A Switch Case,
//* To Determine The Day Of The Week,
//* Based On The Number(1-7) And Log,
//* The Day Name To Console.


let weekDay = 7;

switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not Found!");
        break;
}

//* Task 5:Write A Program That Uses A Switch Case,
//* To Assign A Grade("A","B","C","D","F"),
//* Based On The Score And Log,
//* The Grade To Console.

let score = 85; 
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score < 90):
        grade = "B";
        break;
    case (score >= 70 && score < 80):
        grade = "C";
        break;
    case (score >= 60 && score < 70):
        grade = "D";
        break;
    case (score >= 0 && score < 60):
        grade = "F";
        break;
    default:
        grade = "Invalid score";
        break;
}

console.log(`The grade for a score of ${score} is: ${grade}`);


//? Activity 4: Conditional (Ternnary) Operator

//* Task 6: Write A Program That Usese The Ternary operator
//* to check if a number is even or odd,
//* log the result to the console.


let numcheck = 40;

if(numcheck % 2 == 0){
    console.log(`${numcheck} is Even!`);
}else{
    console.log(`${numcheck} is Odd!`);

}

//? Activity Combining Condition

//* Task 7:Write A Program To Check,
//* If A Year IS A Leap Year Using Multiple,
//* Conditions (Divisible By 4 But Not 100
//* Unless Also Divisible By 400),
//* Log The Result To The Console.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

//! Achievements

//* Implement And Understand Basic if-else Control Flow,
//* Uses Nested if-Else Statements To Handle Multiple Coonditions,
//* Utilizes Switch Cases For Control Flow Based On Specific Values,
//* Apply The Ternary Operator For Concise Condition Checking,
//* Combine Multiple Condition To Solve Multiple Complex.




















































