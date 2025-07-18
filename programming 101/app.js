//Strings in js

console.log("Hello, World!");

//Numbers in js
console.log(1); //integer
console.log(1.1); //float

//Boolean in js
console.log(true);
console.log(false);

//mathematic
var a = 10;
var b = 20;

console.log(a + b); //30
console.log(a - b); //10
console.log(a * b); //200
console.log(a / b); //0.5
console.log(a % b); //10


//let and const in js

let x = 10
const y = 20

console.log(x)
x = 30
console.log(x)
console.log(y)

//String concantenation +

const firstName = "Sunil"
const secondName = "Rio"

console.log(firstName+ " " + secondName)

//Type Coresion

//Number
console.log(1  + 1); //2
console.log(1 + "1"); //11
console.log(1 + true) //2
console.log(1 + false) //1
console.log(1 + undefined) //Nan
console.log(1 + null) //1

//String
console.log("1" + true); //1true
console.log("1" + false) //1false
console.log("1"+ undefined) //1undefined
console.log("1" + null) //1null

//Boolean
console.log(true + true) //2
console.log(true + false) //1
console.log(false + false) //0
console.log(true + undefined) //Nan
console.log(true + null) //1

//Null
console.log(null + true) //1
console.log(null + false) //0
console.log(null + undefined) //Nan
console.log(null + null) //null

//Undefined
console.log(undefined + 1) //Nan
console.log(undefined + "1") //undefined1
console.log(undefined + true) //Nan
console.log(undefined + false) //Nan
console.log(undefined + undefined) //Nan
console.log(undefined + null) //Nan

//Array

const numArr = [1,2,3,4,5,6,7,8,9,10]
console.log(numArr[1] + numArr[3]) // 6

const strArr = ["a", "b", "c", "d", "e"]
console.log(strArr[1] + strArr[3]) //bd

const mixedArr = [1, "a", true, false, null, undefined]
console.log(mixedArr[1] + mixedArr[3]) //afalse

const arrrInArr = [1, 2 , [4, [5,6]], 7, 8]
console.log(arrrInArr[2][1][0]) // 5

//Objects in JS

const obj = {
    name: 'Sunil',
    age: 20,
    isStudent: true,
    hobbies: ['Coding', 'Cricket', 'Movies']
}

console.log(obj.name)
console.log(obj.age)
console.log(obj.isStudent)

obj.hobbies.push("Reading")
console.log(obj.hobbies)

obj.hobbies.pop("Reading")
console.log(obj.hobbies)