// #Primitive

// 7 Types: String, Number-int/folat dono, Boolean, null-empty, undefined-pta ni h ky aaega, symbol, BigInt

const score =1;  //dynamically 

const id =Symbol('123')
const anotherid =Symbol('123')

console.log(id==anotherid);


// Reference: Non Primitive
// Array, Objects, Functions

const heros = ["shaktiman", "spiderman"]

let myObj={
    name: "Aditya",
    age:20,

}

const myFunction = function () {
    console.log("Hello World")
}

// typeof - type batata hai
// undefined- undefined
// null - object
// boolean, number, string = same