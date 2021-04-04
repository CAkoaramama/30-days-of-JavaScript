
// Day 4
// exercises: Level 1

// ======1=====
// let a = 13
// if (a >= 18) {
  // console.log ('You are old enough to drive')
// } 
// else if (a < 18) {
  // console.log ('You are too young to drive')
// }
//  else if (a < 18) {
  //  console.log (`You are left with ${18 - a} years to drive`)
//  }

//  ====== 2 =====
// let a = 37
// let myAge = a
// let b = 20
// let yourAge = b
// 
// if (a > b) {
  // console.log (`I am ${myAge - yourAge} years older than you are`)
// } else if (a < b) {
  // console.log (`You are ${yourAge - myAge} years older than I am`)
// }

//  ===== 3 =====

// let a = 5
// let b = 4
// 
// if (a > b) {
  //  console.log (`${a} is greater than ${b}`)}
// 
//  else if (a < b) {
  //  console.log (`${a} is less than ${b}`)}

// ternary operator  *********????***********

// let (a>b) = true
// 
//  ? console.log ('a is greater than b')
//  : console.log ('a is less than b')

// ====== 4 =========

// let a = 445
// 
// if (a / 2 == 0) {
  // console.log (`${a} is an even number`)
// } else {
  // console.log (`${a} is an odd number`)
// }

/* Exercises: Level 2 
======  1 ======
(if, else)  #order matters
Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F */

// let a = 66
// let grades =  100 >=a && a >=80
// console.log (grades)
// 
// 
// if (grades) {
//  console.log ('A')
// } else if (79 >= a && a >= 70 ) {
//  console.log ('B')
// } else if (69 >= a && a>= 60 ) {
//  console.log ('C')
// } else if (59 >= a && a >=50) {
//  console.log ('D')
// } else if (49 >= a && a >= 0) {
//  console.log ('E')
// }

// ====== 2 =========

// let month = prompt ('Enter month')
// 
// switch (month) {
  // case 'January':
    // console.log ('The season is winter')
    // break
  // case 'Feburary':
    // console.log ('The season is winter')
    // break
  // case 'March':
    // console.log ('The season is Spring')
    // break
  // case 'April':
    // console.log ('The season is spring')
    // break
  // case 'May':
    // console.log ('The season is spring')
    // break
  // case 'June':
    // console.log ('The season is summer')
    // break
  // case 'July':
    // console.log ('The season is summer')
    // break
  // case 'August':
    // console.log ('The saeason is summer')
    // break
  // case 'September':
    // console.log ('The season is Autumn')
    // break
  // case 'October':
    // console.log ('The season is Autumn')
    // break
  // case 'November':
    // console.log ('The season is Autumn')
    // break
  // case 'December':
    // console.log ('The season is winter')
    // break
// }

// ======= 3 =======??? ***********
console.log ('What is the day today?')
let weekDays = 'MoNDay'
console.log (`Today is on ${weekDays}`)
switch (weekDays) {
  case 'Monday' :
    console.log (
    'Monday is the working day')
    break
  case 'Tuesday' :
    console.log ('Tuesday is the working day')
    break
  case 'Wednesday' :
    console.log ('Wednesday is the working day')
    break
  case 'Thursday' :
    console.log ('Thursday is the working day')
    break
  case 'Friday' :
    console.log ('Friday is the working day')
    break
  case 'Saturday' :
    console.log ('Saturday is the weekend')
    break
  case 'Sunday' :
    console.log ('Sunday is the weekend')
    break
}



/*Exercises: Level 3
Write a program which tells the number of days in a month.
Enter a month: January
January has 31 days.

Enter a month: JANUARY
January has 31 day

Enter a month: February
February has 28 days.

Enter a month: FEbruary
February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.*/
// let month = prompt ('enter month')
// 
// switch (month) {
  // case 'January':
    // console.log ('January has 31 days')
    // break
  // case 'Feburary':
    // console.log ('Feburary has 28 days')
    // break
  // case 'March':
    // console.log ('March has 31 days')
    // break
  // case 'April':
    // console.log ('April has 30 days')
    // break
  // case 'May':
    // console.log ('May has 31 days')
    // break
  // case 'June':
    // console.log ('June has 30 days')
    // break
  // case 'July':
    // console.log ('July has 31 days')
    // break
  // case 'August':
    // console.log ('August has 31 days')
    // break
  // case 'September':
    // console.log ('September has 30 days')
    // break
  // case 'October':
    // console.log ('October has 31 days')
    // break
  // case 'November':
    // console.log ('November has 30 days')
    // break
  // case 'December':
    // console.log ('December has 31 days')
    // break
// }



