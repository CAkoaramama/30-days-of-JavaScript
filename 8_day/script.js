'use strict'

// OBJECTS
// Global scope

// let a = 'JavaScript'
// let b = 10
// function letsLearnScope () {
//   console.log (a,b)  //JavaScript 10
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log (a,b)  //Pythong 100
//   }
//   console.log (a,b)
// }
// letsLearnScope ()
// console.log (a, b)  //JavaScript 10

// Local scope

// 

// function letsLearnScope () {
//   var gravity = 9.81
//   console.log (gravity)
// }
// if (true) {
//   var gravity = 9.81
//   console.log (gravity)  //9.81
// }
// console.log (gravity)
// for (var i = 0; i < 3; i++) {
//   console.log (i)
// }
// console.log (i)

// function letsLearnScope() {
//   const gravity = 9.81
//   console.log (gravity)
// }
// for (let i = 0; i < 3; i++ ) {
//   console.log (i)
// }

// Creating an objecting with values

// const rectanble = {
//   length: 20,
//   width: 20
// }
// console.log (rectanble)

// const person = {
//   firstName: 'Motomi',
//   lastName: 'Yamagata',
//   age: 50,
//   country : 'Japan',
//   city : 'Tokyo',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Phython',
//     'D3.js'
//   ],
//   getFullName: function() {
//     return `${this.firstName}${this.lastName}`
//   },
//   'phone number': '+3584545454545'

// }
// console.log (person.firstName)
// console.log (person.lastName)
// console.log (person.age)
// console.log (person.location)

// console.log (person ['firstName'])
// console.log (person ['lastName'])
// console.log (person ['age'])
// console.log (person ['location'])
// console.log (person['phone number'])

// Creating object methods

// const person = {
//   firstName: 'Motomi',
//   lastName: 'Yamagata',
//   age: 50,
//   country: 'Japan',
//   city: 'Tokyo',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// // console.log (person.getFullName())
// person.nationality = 'Japanese'
// person.country = 'Japan'
// person.skills.push('Meteor')
// person.title ='teacher'
// person. skills.push ('SasS')
// person.isMarried = true

// person.getPersonInfo = function() {
//   let skillsWithougLastSkill = this.skills
//   .splice (0, this.skills.length -1) 
//   .join(' , ')
//   let lastSkill = this.skills.splice (this.skills.length -1) [0]
//   let skills = `${skillsWithougLastSkill}, and ${lastSkill}`
//   let fullName = this.getFullName()
//   let statement =`${fullName} is a ${this.title}. \n He lives in ${this.country}. \n He teaches ${skills}`
//   return statement

// }
// console.log (person)
// console.log (person.getPersonInfo())

// Object Methods

const person = {
  firstName: 'Motomi',
  age: 50,
  country: 'Japan',
  city: 'Tokyo',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Torpantie 11B',
    pobox: 20002,
    city: 'Kuaniainen'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city},${this.country}. I am ${this.age}.`
  }
}
const copyPerson = Object.assign ({}, person)
console.log (copyPerson)

const keys =Object.keys (copyPerson)
console.log (keys)
const address = Object.keys (copyPerson.address)
console.log (address)

const values =Object.values (copyPerson)
console.log (values)

const entries = Object.entries (copyPerson)
console.log (entries)

console.log (copyPerson.hasOwnProperty ('name'))
console.log (copyPerson.hasOwnProperty('score'))





