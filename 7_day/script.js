// function square() {
//   let num = 2
//   let sq = num * num
//   console.log (sq)
// }
// square ()

// function addTwoNumbers () {
//   let numOne = 10
//   let numTwo = 20
//   let sum = numOne + numTwo
//   return sum
// //   console.log (sum)
// }
// console.log (addTwoNumbers ())
// // addTwoNumbers ()

// function printFullName () {
  // let firstName = 'Motomi'
  // let lastName = 'Yamagata'
//   let space = ' '
//   let fullName = firstName + space + lastName
//   return fullName
// //   console.log (fullName)
// }
// // printFullName ()
// console.log (printFullName())


// function areaOfCircle (r) {
//   let area = Math.PI * r * r
//   return area
// }
// console.log (areaOfCircle(10))

// function square (number) {
//   return  number * number
// }
// console.log (square (10))

// function sumTwoNumbers (numOne, numTwo) {
//   let sum = numOne + numTwo
//   return sum
//   // console.log (sum)
// }
// sumTwoNumbers (10, 20)

// function printFullName (firstName, lastName) {
//   return `${firstName} ${lastName}`
// }
// console.log (printFullName ('Motomi', 'Yamagata'))

// function sumArrayValues (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr [i];
//   }
//   return sum;
// }
// const numbers = [1,2,3,4,5];
// console.log (sumArrayValues (numbers));

// const areaOfCircle = (radius) => {
//   let area = Math.PI * radius * radius;
//   return area;
// }
// console.log (areaOfCircle (10))

// function sumAllNums() {
//   console.log (arguments)
// }
// sumAllNums (1,2,3,4)

// function sumAllNums () {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments [i]
//   }
//   return sum
// }
  
// console.log (sumAllNums (1,2,3,4))
// console.log (sumAllNums (10,20,13,40,10))
// console.log (sumAllNums (15,20,30,25,10,33,40))

// const sumAllNums = (...args) => {
//   let sum = 0
//   for (const element of args) {
//     sum += element
//   }
//   return sum
// }
// console.log (sumAllNums (1,2,3,4))
// console.log (sumAllNums(10,20,13,40,10))
// console.log (sumAllNums (15,20,30,25,10,33,40))

// const square = function(n) {
//   return n * n
// }
// console.log (square (2))

// (function(n) {
//   console.log (n * n)
// })

// let squaredNum = (function(n) {
//   return n * n
// }) (10)
// console.log (squaredNum)

// function square(n) {
//   return n * n
// }
// console.log (square(2))

// const square = n => {
//   return n * n
// }
// console.log (square(2))

// const square = n => n * n
// console.log (square(2))

// const changeToUpperCase = arr => {
//   const newArr  = []
//   for (const element of arr) {
//     newArr.push (element.toUpperCase())
//   }
//   return newArr
// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log (changeToUpperCase(countries))

// const printFullName = (firstName, lastName) => {
//     return `${firstName}, ${lastName}`
// }
// console.log (printFullName ('Motomi', 'Yamagata'))

// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`
// }

// console.log(printFullName('Asabeneh', 'Yetayeh'))

// const pringFullName = (firstName, lastName) => `${firstName} ${lastName}`
// console.log (pringFullName ('Motomi', 'Yamagata'))

// function greetings (name = 'Peter') {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`
//   return message
// }
// console.log (greetings())
// console.log (greetings ('Motomi'))

function generateFullName (firstName = 'Motomi', lastName = 'Yamagata') {
let space = ' '
let fullName = firstName + space + lastName
return fullName
}

console.log (generateFullName())
console.log (generateFullName ('Motomi', 'Yamagata'))

function calculateAge (birthYear, currentYear = 2021) {
  let age = currentYear - birthYear
  return age
}
console.log ('Age:', calculateAge (1967))

function weightOfObject (mass, gravity = 9.81) {
  let weight = mass * gravity + 'N'
  return weight
}
console.log ('Weight of an object in Newton:', weightOfObject (100))
console.log ('Weight of an Object in Newton:', weightOfObject (100, 1.62))


