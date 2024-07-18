// //! Task/Activities
// //? Activity 1: For Loop
// //* Task 1:Write A Program To Print ,
// //* Numbers From 0 to 10 Using A For Loop.
// for(let i = 0;i <= 10;i++){
//     console.log(i);
// }
// //* Task 2:Write A Program To Print,
// //* The MUltiplication Table Of 5 Using A For Loop.
// for(let i = 1;i <= 10;i++){
//     console.log(`5 x ${i} = `, 5 * i );
// }
// //! Activity 2: While Loop
// //* Task 3:Write A Program To Calculate,
// //* The Sum Of Numbers From i To 10,
// //* Using A While Loop.
// let i = 0;
// while (i <= 10) {
//     console.log(i + i);
//     i++;
// }
// //* Task 4:Write A Program To Print Numbers,
// //* From i To 10,
// //* Using A While Loop.
// let f = 0;
// while (f <= 10) {
//     console.log(f);
//     f++;
// }
// //! Activty 3: Do-While Loop
// //* Task 5:Write A Program To Print Numbers,
// //* From i To 10,
// //* Using A Do-While Loop.
// let l = 0;
// do {
//     console.log(l);
//     l++;
// } while (l <= 10);
// //* Task 6:Write A Program To Calculate,
// //* Factorial Of a Number Using A,
// //* Do-While Loop.
// let number = 5; 
// let factorial = 1;
// let m = 1;
// do {
//     factorial *= m;
//     m++;
// } while (m <= number);
// console.log(`The factorial of ${number} is ${factorial}`);
//! Activity 4:Nested Loop
//* Task 7:Wrrite A Program To Print,
//* A Pattern UsingNested For Loops.
var rows = 5;
for (var i = 1; i <= rows; i++) {
    var pattern = '';
    for (var j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}
//! Activity 5:Loop Control Statement
//* Task 8:Write A Program To Print Numbers,
//* 1 To 10 But skip The Number 5,
//* Using Continue Statement.
for (var i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
//* Task 9:Write A Program To Print Numbers,
//* 1 To 10 But Stop The Loop When Number is 7,
//* Using Break Statement.
for (var i = 0; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
//! Achievement
//? UnderStand And Use For Loop To Iterate Over A Sequence Of Numbers,
//? Utilize While Loop For Iteration Based On A Condition,
//? Apply Do-While Loops To Ensure THe Loop Body Is Executed Atleast One,
//? Implement Nested Loops To Solve More Complex Problems,
//? Use Loop Control Statement (Break And Continue) To Control The Flow Of Loops.
