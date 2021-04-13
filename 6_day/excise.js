'use strict'
//  LOOP  Day 6

// Exercises; Level 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

//  ======= 1 ==========
// for (let i = 0; i <=10; i++) {
//   console.log (i)
// }

// let i = 0
// while (i <= 10) {
//   console.log (i)
//   i++
// }

// let i = 0
// do {console.log (i)
// i++}
// while (i <= 10)  // 最初にメッセージアウトしなければならない

// ======== 2 ========
// for (let i = 10; i >= 0; i--) {
//   console.log (i)
// }

// let i = 10
// while (i >= 0) {
//   console.log (i)
//   i--
// }

// let i = 10
// do {console.log (i)
// i--}
// while (i >= 0)

//  ======== 3 ========
// const n = 8
// for (let i = 0; i <= n; i++) {
//   console.log (i)
// }

//  ========= 4 ========= ???******
// const sharp= ['#']
// const newSharp = []
// for (let i = 0; i <= 5; i++) {
//   newSharp.push (sharp [i] * sharp [i])
// }
// console.log (newSharp)

//  ==========  5 =========
// for (let i = 0; i <=10; i++) {
//   console.log (`${i} * ${i} = ${i * i}`)  
  
// }

// ======= 6 =========== ?? コンソールを分ける方法しかない？
// console.log (`i  i^2  i^3`)
// for (let i = 0; i <= 10; i++) {
//   console.log (`${i}  ${i**2}   ${i**3}`)
// }

// 　===== 7 =========== 
// let i = 0
// while ( i<= 100) {
//   if (i % 2 == 0)
//   console.log (i)
//   i++
// }
  
// ========== 8 ==============
// let i = 0
// while (i <= 100) {
//   if (i % 2 == 1)
//   console.log (i)
//   i++
// }

//  ========= 9 =========== ??? *********
// prime number (素数)
// const highNumber = 100
// const lawNumber = 2
// let i = 0
//   for (let i = lawNumber; i <= highNumber; i++) {
//   if (number % i == 0 ) 
//   console. log (i)
// }

// for (let i = 0; i <=10; i++) {
//   let primeNumber = true;
//   for (let i = 2; i <= i/2; i ++)  
  
// }

// function isPrime (num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0)
//     return false;
//   }
//   return true;
// }
// for (let i = 0; i < 100; i++) {
//   if (isPrime(i)) console.log (i);
// }

// for (let i=1; i<=100; i++) {
//   let count = 0
//   for (let x = 1; x <= 100; x++)
//       {if ( i % x == 0)
//       (count++)}
//       if (count === 2)
//       console.log (`${i} is a prime number`)
// }


//  ======= 10 ===========

// const numbers = 100
// let sum = 0
// for (let i = 1; i <= numbers; i++) {
//   sum += i;
// }
// console.log (sum)

//  ======== 11 ==========
// const numbers = 100
// let sum = 0
// for (let i = 1; i <= numbers; i + 2) {
//   sum += i
  
//   console.log (sum)
// }