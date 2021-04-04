// Day 3 Exercises

// Level 1

// ======== 1 ==========
/* Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.*/

let fistName = 'Motomi'
let lastName = 'Yamagata'
let country = 'Japan'
let city = 'Ise'
let age = 50
let isMarried = true

console.log (typeof fistName)  //string
console.log (typeof lastName)  //string
console.log (typeof country)  //string
console.log (typeof city)  //string
console.log (typeof age)  //number
console.log (typeof isMarried)  // boolean

//  ========  2 ==========
/* Check if type of '10' is equal to 10*/
console.log ( 10 === '10')      //false

// ========= 3 ==========
// Check if parseInt('9.8') is equal to 10

console.log ('9.8' === 10 )   //false

//  =========  4 ===========
console.log (10 - 3 === 3 + 4)     //true
console.log  (4 < 5 || 8 < 5)    //true
console.log  (10 > 7 && 3>1)   //ture
console.log ( 10 === '10')     //false
console.log (3 != 3)    //false
console.log (undefined == null)    //true
console.log (undefined === null)    //false

//   ========  5  ---------

console.log (4 > 3)     //true
console.log (4 >= 3)    //true  (false)
console.log (4 < 3)     //false
console.log ( 4  <= 3)      //false
console.log (4 == 4)    //true
console.log (4 === 4)    //true
console.log (4 != 4)    //false
console.log (4 !='4')   //false (true)
console.log (4 !== 4)   //false (true)
console.log (4 != '4')   //false (true)
console.log (4 == '4')    //true
console.log (4 === '4')   //false

//  =========  6 ============
console.log (4 > 3 && 10 < 12)   //true
console.log (4 > 3 && 10 > 12)   //false
console.log (4 > 3 || 10 < 12)   //true
console.log (4 > 3 || 10 > 12)     //true
console.log (!4 > 3)   //false
console.log (!4 < 3)  //true
console.log (!false)  //true
console.log (!4 > 3 && 10 < 12)    //false
console.log (!!4 > 3 && 10 > 12)    //false
console.log (!4 === '4')   //false (true)

//  ========= 7 ==============
const now = new Date ()
console.log (now.getFullYear())    //2021
console.log (now.getMonth () +1)   //4
console.log (now.getDate())     //4
console.log (now.getDay ())   //0
console.log (now.getHours ())  //20
console.log (now.getMinutes ())   //50
console.log (now. getSeconds ())  //5
