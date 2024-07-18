//! Task/Activities 

//? Activity 1 : Arithmetic Operator

//* Task 1:Write A Program To Add Two Numbers,
//* Log The Result To The Console.

let sum = 32 + 65;
console.log(sum);

//* Task 2:Write A Program To Subtract Two Numbers,
//* Log The Result To The Console.

let sum2 = 44 - 76;
console.log(sum2);

//* Task 3:Write A Program To Multiply Two Numbers,
//* Log The Result To The Console.

let sum3 = 12 * 54;
console.log(sum3);

//* Task 4:Write A Program To Divide Two Numbers,
//* Log The Result To The Console.

let sum4 = 32 / 45;
console.log(sum4);

//* Task 5: Write A Program To Find Reminder,
//* When Number Is Divided by Another,
//* And Log The Result To The Console.

function reminder(num1,num2){
    let result = num1 / num2;
    console.log(result);
}

reminder(34,45);

//? Activity 2 : Assignment Operator

//* Task 6:Use The += Operator To Add A Number,
//* To A Variable Log The Console.

let num3 = 34;
num3 += 1;
console.log(num3);

//* Task 7:Use The -= Operator To Subtract A Number,
//* To A Variable Log The Console.

let num4 = 54;
num4 -= 4;
console.log(num4);

//? Activity 3 : Comparison Operator

//* Task 8:Write A Program To Compare,
//* Two Number Using < > Log The,
//* Result To The Console.

let num5 = 65;
num5 > 54 ? console.log("Yes"): console.log("No");
num5 < 54 ? console.log("Yes"): console.log("No");

//* Task 9:Write A Program To Compare,
//* Two Number Using <= And >= Log The,
//* Result To The Console.

let num6 = 78;
num6 > 54 ? console.log("Yes"): console.log("No");
num6 < 54 ? console.log("Yes"): console.log("No");

//* Task 10:Write A Program To Compare,
//* Two Number Using == And === Log The,
//* Result To The Console.

let num7 = 55;
num7 == 55 ? console.log("Yes"): console.log("No");
num7 === 34 ? console.log("Yes"): console.log("No");

//? Activity 4: Logical Operator

//* Task 11:Write A Program That Uses,
//* The && Operator To Combine Two Conditions,
//* Log The Result To The Console.

let num8 = 73;
let num9 = 98;
if(num8 === 73 && num9 === 98){
    console.log("Yes");
}else{
    console.log("No");
}

//* Task 12:Write A Program That Uses,
//* The || Operator To Combine Two Conditions,
//* Log The Result To The Console.

let msg = "Hello";
let msg1 = "World";
if(msg === "Hello" || msg1 === "World"){
    console.log("Yes");
}else{
    console.log("No");
}

//* Task 13:Write A Program That Uses,
//* The ! Operator To Negate A Conditions,
//* Log The Result To The Console.

function checkCondition(condition) {
    console.log(`The original condition is: ${condition}`);
    console.log(`The negated condition is: ${!condition}`);
}

// Example usage:
checkCondition(true);  // The original condition is: true, The negated condition is: false
checkCondition(false); // The original condition is: false, The negated condition is: true
checkCondition(0);     // The original condition is: 0, The negated condition is: true
checkCondition(1);     // The original condition is: 1, The negated condition is: false

//? Activity 5:Ternary Operator

//* Task 14:Write A Program That Uses The Ternary Operator,
//* To Check If A Number Is Positive Or Nagative,
//* Log The Result To The Console.

function checkNumber(number) {
    let result = number >= 0 ? "positive" : "negative";
    console.log(`The number ${number} is ${result}.`);
}

// Example usage:
checkNumber(5);   // The number 5 is positive.
checkNumber(-3);  // The number -3 is negative.
checkNumber(0);   // The number 0 is positive.

//! Achievement

//? By The End Of This Activity, You Will

//* Undeerstand The Uses Of Arithmetic Operators To Perform Basic Calculation,
//* Use Assignment Operators To Modify Variable Values,
//* Compare Value Using Comparision Operator,
//* Combine Conditions Using Logical Operators,
//* Use The Ternary Operator To Soncise Conditional Expression.




