//? Task/Activity

//! Activity 1:Function Decleration

//* Task 1:Write A Function To Check,
//* If A Number Is Even Or Odd,
//* Log The Result To Console.

function numCheck(num:number){
    if(num % 2 === 0){
        console.log(`${num} Is Even!`);
    }else{
        console.log(`${num} Is Odd!`);
    };
};
numCheck(31);

//* Task 2:Write A Function To Calculate,
//* The Square Of A Number,
//* Log The Result.

function calculateNumberOfSquare(num:number){
    let square = num * num;
    console.log(`The square of ${num} is ${square}`);
};
calculateNumberOfSquare(45);
calculateNumberOfSquare(453);

//? Activity 2:Function Expression

//* Task 3:Write A Function Expression To Find A,
//* Maximum Of Two Numbers,
//* Log The Result To The Console.

function maximumNum(num1:number,num2:number){
    if(num1 > num2){
        console.log(`${num1} Is Maximum`);
    }else{
        console.log(`${num2} Is Maximum`);
    };
};
maximumNum(34,65);

//* Task 4:Write A Function To Concate,
//* Two Strings,
//* Return The Result.

function concateStrings(msg1:string,msg2:string){
    console.log(msg1 + " " + msg2);
};
concateStrings("My Name Is Hamza Nasir","I Am 23 Years Old");

//? Activity 3:Arrow Function

//* Task 5:Write An Arrow Function,
//* To Calculate Sum Of Two Numbers,
//* Log The Result On Console.

const sumOfNumbers = (nums1:number,nums2:number) => console.log(nums1 + nums2);

//* Task 6:Write An Arrow Function,
//* To Check If A String Contains,
//* a Specific Charachter,
//* Return A Boolean Value.

// const specificCharachter = (str:string) => {
//     let result = str.includes("Hamza");
//     console.log(result);
// };
// specificCharachter("Hello Hamza Nasir");

//? Activity 4:Function Parameters And Default Values.

//* Task 7:Write A Function That Takes Two Perameters,
//* And Return Their Product, Provide A Default Value,
//* For The Second Perameter.

function defaultFunc(a:number ,b = 5){
    return a + b;
};
defaultFunc(3);

//* Task 8:Write A Function That Takes A Person Name,
//* And Age And Return A Greeting Message,
//* Provide A Default Value To Age.


function greet(name:string,age = 18){
    console.log(`Asalam Alikum ${name}`);
    console.log(`Your Are ${age} Years Old`);
};
greet("Hamza")

//? Activity 5 :Higher Order Function

//* Task 9:Write A Higher Order Function That Takes
//* A Function And A Number,
//* Call The function Many Times.

function callback(func) {
    console.log("Hello World");
};
function higherFunc(func:Function,c:number){
    console.log(c);
    return func()
};
higherFunc(callback,34);
higherFunc(callback,332);
higherFunc(callback,334);

//* Task 10:Write A Higher Function That Takes,
//* Two Functions And A Value,
//* Applies The First Function To The Value,
//* Then Applies The Second Function To The Result.



function applyFunctions(one:Function,two:Function,Three:number){
    const result1 = one(Three);
    const result2 = two(result1);
    return result2;
}

const increment = (x: number): number => x + 1;


const numberToString = (x: number): string => x.toString();

const result = applyFunctions(increment, numberToString, 5);
console.log(result); 


//! Achievements

//? Understand and define functions using function declerations,expessions and arrow functions,
//? Use function perameter and default values effectively,
//? Create and utilize higher order function,
//? Apply Functions to solve COmmon Problems, And Perform Calculations,
//? Enhance code reusability  and organization using functions.






































































































