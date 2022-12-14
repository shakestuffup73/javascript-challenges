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

// Challenge Problem 5: Sort the Odd

function sortArray(array) {
  let odds = array.filter(num => num % 2 !==0).sort((a, b) => a - b)
  // console.log('this is odds', odds)

  return array.map(number => number % 2 ? odds.shift() : number)
}

console.log(sortArray([5, 8, 6, 3, 4]))

// Challenge Problem 6: Square Every Digit

function squareDigits(num){
  let stringNum = num.toString()
  let array = []
  // console.log('this is stringNum', stringNum)

  for (let i = 0; i < stringNum.length; i++){
    // console.log('this is stringNum[i]', stringNum[i])
    let integer = parseInt(stringNum[i])
    array.push(integer)
    // console.log('this is array', array)
  }
  
  let exponents = array.map((number) => Math.pow(number, 2))
  // console.log('this is exponents', exponents)

  let joinedNum = exponents.join('')
  return parseInt(joinedNum)
}

console.log(squareDigits(12345))

// Challenge Problem 7: FIZZBUZZ!

for (let i = 0; i <= 100; i++){
  if (i % 3 === 0) {
    console.log("FIZZ")
  }
  else if (i % 5 === 0) {
    console.log("BUZZ")
  }
  else {
    console.log(i)
  }
}

// Challenge Problem 8: Highest Scoring Word

// letterValues = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }

function high(string){
  // each letter scores points
  // a=1, b=2, c=3...to z=26
  // add letters in each word in the string
  let array = string.split(' ')
  console.log(array)
  
  let scoreArray = []
  
  array.forEach((word)=> {
    console.log('this is word', word)
    let wordArray = word.split('')
    console.log('this is wordArray', wordArray)
    
    let wordTotal = 0
    
    for (let i = 0; i < wordArray.length; i++) {
      console.log('this is wordArray[i]', wordArray[i])
      wordTotal += (wordArray[i].charCodeAt()-96)
      console.log('this is wordTotal', wordTotal)
    }
    scoreArray.push(wordTotal)
    console.log('this is scoreArray', scoreArray)
  })
  // return word with highest value
  // if tie, return first word with highest tied value
  let highestVal = scoreArray.indexOf(Math.max(...scoreArray))
  return array[highestVal]
}

console.log(high('this is bananas'))