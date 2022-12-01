// Challenge Problem 1: Factorial Using Recursion

function factorial(num){
  if (num < 0) {
    return "num needs to be an integer greater than zero"
  }
  else if (num === 0) {
    return 1
  }
  else {
    return num * factorial(num-1)
  }
}

console.log('this is factorial', factorial(5))

// Feedback from above solution:
  // Two things to think about. 
  // 1. The problem asked you to assume the input value would be a positive integer greater than 0, so the first if statement is unnecessary. 
  // 2. A function shouldn't really have two different types of returns. In your case, it either returns an integer or it returns a string if num is < 0. A better return statement would've been -1 there, so that the return would still be an integer. This will come in handy when you start learning TypeScript and have to declare what type your return will be.

// Refactored Solution:

function factorial2(num){
  if(!num){
      return 1 
  } 
  else if (num < 0){
    return -1
  }
  else {
    return num * factorial2(num-1) 
  } 
}

console.log('this is factorial2', factorial2(5))

// Challenge Problem 2: Who Likes It?

function likes(names) {
  if (names.length === 0) {
    return "no one likes this"
  }
  else if (names.length === 1) {
    return names + " likes this"
  }
  else if (names.length === 2) {
    return names[0] + ' and ' + names[1] + ' like this'
  }
  else if (names.length === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }
  else if (names.length > 3) {
    return names[0] + ', ' + names[1] + ' and ' + `${names.length-2} others like this`
  }
}

console.log(likes(['Joe', 'Ellie', 'Sam', 'Max']))
console.log(likes(['Joe', 'Ellie', 'Sam']))
console.log(likes(['Max', 'Sam']))
console.log(likes(['Max']))


// Challenge Problem 3: Jaden Casing Strings

function JadenCase (string) {
  let array = string.split(' ')
  let upperCasedArray = []

  array.forEach(element => {
    // console.log('this is element', element)
    // console.log('this is element[0].toUpperCase() + element.slice(1)', element[0].toUpperCase() + element.slice(1))
    upperCasedArray.push(element[0].toUpperCase() + element.slice(1))
    // console.log('this is upperCasedArray', upperCasedArray)
  })
  // console.log('this is upperCasedArray', upperCasedArray)
  return upperCasedArray.join(' ')
}

console.log(JadenCase('this is weird'))
console.log(JadenCase('i like pizza'))
console.log(JadenCase('i am practicing javascript coding challenges'))

// Challenge Problem 4: Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(string) {
  let vowels = ['a','e','i','o','u']
  let count = 0;

  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (vowels[i] === string[j])
      count++
    }
  }
  return count;
}

console.log(getCount('apple'))
console.log(getCount('banana'))
console.log(getCount('intentional'))

