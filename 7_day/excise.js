'use strict'
// Level 1 ;
//  =========== 1 ==========

function printFullName (){
  let firstName = 'Motomi'
  let lastName = 'Yamagata'
  let space = ' '
  let fullName = firstName + space + lastName
  console.log (fullName)
}
printFullName ()

// ========= 2 ==========
function printFullName (firstName, lastName){
  return `${firstName} ${lastName}`
}
console.log (printFullName ('Motomi', 'Yamagata'))

// ========= 3 ========
function addTwoNumbers () {
  let numberOne = 10
  let numberTwo = 20
  let sum = numberOne + numberTwo
  console.log (sum)
}
addTwoNumbers()

// ======== 4 =========
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle (length, width) {
  let area = length * width
  console.log (area)
}
areaOfRectangle (10,20)

// ========= 5 =========
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function areaOfRectangle (length, width) {
  let area = 2 * (length + width)
  console.log (area)
}
areaOfRectangle (10,20)

// ======== 6 ==========
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism (length, width, height) {
  let volume = length * width * height
  console.log (volume)
}
volumeOfRectPrism (10,20,3)

// ========= 7 =============
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle (r) {
  let area = Math.PI * r * r
  return area
}
console.log (areaOfCircle (10))

// function areaOfCircle (r) {
//   let area = Math.PI * r * r
//   console.log (area)
// }
// areaOfCircle (10)   ***これらは一緒の結果になる？

// ========== 8 ==============
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumference (r) {
  let circle = Math.PI * r * 2
  console.log (circle)
}
circumference (10)

// ========= 9 =============
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function substanceOfDensity (mass, volume) {
  let density = mass / volume
  console.log (density)
}
substanceOfDensity (10,30)

//  ========== 10 ==========
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedOfObject (kiloMeterDistance, minuteTime) {
  let speed = kiloMeterDistance / minuteTime
  console.log (`Speed of the object is ${speed * 60} km per hour`)
}
speedOfObject (100, 70)

// ========== 11 ===============
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weightOfObject (mass, gravity = 9.81) {
  let weight = mass * gravity + 'N'
  return weight
}
console.log (`Weight of an object in Newton:`, weightOfObject (10))

// ============= 12 ===========
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function convertCelciusToFahrenheit (celcius) {
  let fahrenheit = (celcius * 9/5) + 32
  return fahrenheit
}
console.log (convertCelciusToFahrenheit (16))

//  ========== 13 =========
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function getBmi (weightInKg, height) {
  let bmi = (weightInKg / (height * height))
  return bmi
}
console.log (getBmi (62, 1.63))
let answer = getBmi
if (answer < 18.5) {
  console.log ('Underweight')
} else if (answer >= 18.5 && getBmi < 24.9) {
  console.log ('Normal')
} else if (answer > 25 && getBmi < 29.9) {
  console.log ('Overweight')
} else if (answer > 30) {
  console.log (Obese)
// }
//   ?? 'if'を入れてログに出したい場合はどうしたら良い？

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
