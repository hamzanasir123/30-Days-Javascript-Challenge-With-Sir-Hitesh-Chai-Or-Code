//! Task/Activity

//? Activity 1:Array Creation and acess

//* Task 1:Create an array of numbers from 1 to 5,
//* Log the array to the console.

let numArr = [1,2,3,4,5];
console.log(numArr);

//* Task 2:Acess the first and last element,
//* Of the array and log them to console.

console.log(numArr[0]);
console.log(numArr[4]);

//? Activity 2:Array Method Basic

//* Task 3:Use Push MEthod To Add New Number,
//* To The End Of The Array,
//* Log The Updated Array.

numArr.push(6);
console.log(numArr);

//* Task 4:Use Pop MEthod To Remove The Last Element,
//* To The End Of The Array,
//* Log The Updated Array.

numArr.pop();
console.log(numArr);

//* Task 5:Use Shift MEthod To Remove The First Element,
//* To The Start Of The Array,
//* Log The Updated Array.

numArr.shift();
console.log(numArr);

//* Task 6:Use UnShift MEthod To Add The Element,
//* To The Start Of The Array,
//* Log The Updated Array.

numArr.unshift(0);
console.log(numArr);

//? Activity 3:Array Method (Intermadiate)

//* Task 7:Use The Map Method To Create A New Array,
//* Where Each Number Is Doubled,
//* Log The New Array.

let arr = [1,2,3,4,5];
let mapedArray = arr.map(num => num * 2);
console.log(mapedArray);

//* Task 8:Use A Filter Method To Create A New Array,
//* With Only Even Numbers,
//* Log The New Array.

let newArr = [1,2,3,4,5];
let filterArray = newArr.filter( num => num % 2 === 0);
console.log(filterArray);

//* Task 9:Use The Reduce Method To Calculate,
//* The Sum Of All Numbers In The Array,
//* Log The Result.

let reducedArray = numArr.reduce((val,currVal) => val + currVal, 0 );
console.log(reducedArray);

//? Activity 4:Array Iteration

//* Task 10:Use A For Loop To Iterate Over The Array,
//* Log Each Element To The Console.

let arrForLoop = [1,2,3,4,5,6]
for(let i = 0; i <= arrForLoop.length; i++){
    console.log(i);
};

//* Task 11:Use A ForEach Method To Iterate Over The Array,
//* Log Each Element To The Console.

arrForLoop.forEach((f) => {
    console.log(f);
});

//? Activity 5:Multi-Dimensional Array

//* Task 12:Create A Two Dimensional Array (matrix),
//* Log The Entire Array To Console.

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix);

//* Task 13:Acces And Log A Specific Element,
//* From Dimensional Array.

console.log(matrix[1][2]); //* 6



























































