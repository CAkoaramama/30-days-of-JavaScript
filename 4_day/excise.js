// Day 4

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

/* Exercises: Level 2 (if, else)  #order matters
Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F */

let a = 66
let grades =  100 >=a && a >=80
console.log (grades)


if (grades) {
  console.log ('A')
} else if (79 >= a && a >= 70 ) {
  console.log ('B')
} else if (69 >= a && a>= 60 ) {
  console.log ('C')
} else if (59 >= a && a >=50) {
  console.log ('D')
} else if (49 >= a && a >= 0) {
  console.log ('E')
}

