// =============exercise: level 1================
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
const webTechs =[
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
// ========== 1.========= Declare an empty array;
// const arr = Array ()
// console.log (arr)

// ======== 2.=========
//  Declare an array with more than 5 numbr of elements
// console.log (countries)
  // ========3.=========
// console.log (countries. length)  // 11
// ========= 4  =========
// console.log (countries [0])  //Albania
// console.log (countries [6])  //Germany
// console.log (countries [10])  //Kenya
// ========= 5 ========
// let mixedDataType = webTechs
// console.log (mixedDataType.length)  //7
// ========= 6 ======
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]
// ========== 7 ============.
// console.log (itCompanies)  
// ======== 8  ==========
// console.log (itCompanies.length)  //7
//  =======9  =======
// console.log (itCompanies [0])  //Facebook
// console.log (itCompanies [3])  //Apple
// console.log (itCompanies [6])  //Amazon
//  ===== 10.========
// console.log (itCompanies [1]) //google
// ========11. =======
// let firstIndex = itCompanies [0]
// console.log (itCompanies [0])  //Facebook
// // console.log (firstIndex.toUpperCase ())  //FACEBOOK
// let secondIndex = itCompanies [1]
// console.log (itCompanies [1])  //Google
// console.log (secondIndex.toUpperCase ())  //GOOGLE
// let thirdIndex = itCompanies [2]
// console.log (itCompanies [2]) //Microsoft
// // console.log (thirdIndex.toUpperCase())  //MICROSOFT
// let fourthIndex = itCompanies [3]
// console.log (itCompanies [3])
// console.log (fourthIndex.toUpperCase())  //APPLE
// let fifthIndex = itCompanies [4]
// console.log (fifthIndex.toUpperCase())  //IBM
// let sixthIndex = itCompanies [5]
// console.log (sixthIndex.toUpperCase())  //ORACLE

//  =====  12 ========
// console.log (`${itCompanies.splice(0,6)} and ${itCompanies.splice(0)} are big IT companies`)  
// itCompanies.pop()
// console.log (itCompanies)

//  ======= 13 ========
// console.log (Array.isArray(itCompanies))
// const itCompanie = 'NEC'
// console.log (Array.isArray(itCompanie))  //false

// ====== 14 ========  ****** ??*****
// let string = 'Facebook, Google, Miclosoft, Apple, Oracle, Amazon'

// console.log (string.indexOf('oo'))

// ======= 15 =========
// itCompanies.sort()
// console.log (itCompanies)

//  ======== 16 ======
// itCompanies.reverse ()
// console.log (itCompanies)

// ======  17 ======
// console.log (itCompanies.slice(0,3))
//  ========  18 ======
// console.log (itCompanies.slice (4))

//  ========== 19 ===========
// console.log (itCompanies.slice (3,4))

// =========  20 ===========
// console.log (itCompanies.splice (1))

// ======== 21 ==========
// ======== 22 ==============

// =========== 23 -==========
console.log (itCompanies.splice ())


