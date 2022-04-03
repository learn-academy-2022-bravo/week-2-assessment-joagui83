// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("multBy3", () => {
    it(" takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        const numbersArray2 = [24, 27, 30, 33, 36]
    expect(multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })

  // Output:  FAIL  ./code-challenges.test.js
//   multBy3
//   ✕  takes in an array of numbers and returns an array with all the numbers multiplied by 3. (1 ms)

// ● multBy3 ›  takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// b) Create the function that makes the test pass.
const numbersArray1 = [6, 7, 8, 9, 10]
const numbersArray2 = [24, 27, 30, 33, 36]
const multBy3 = (array) => {
    return array.map(value => value* 3)
}
console.log(multBy3(numbersArray1))
console.log(multBy3(numbersArray2))

// PASS  ./code-challenges.test.js
// multBy3
//   ✓  takes in an array of numbers and returns an array with all the numbers multiplied by 3. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.151 s


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divisibletBy3", () => {
    it(" takes in a number and returns number is divisible by three", () => {
    const num1= 15
    const num2 = 0
    const num3 = -7
    const divBy3 = (number) => {
        if(number % 3 == 0){
            return `${number} is divisible by three`
        }else{ return `${number} is not divisible by three`}
    }
    expect(divBy3(num1)).toEqual("15 is divisible by three")
    expect(divBy3(num2)).toEqual("0 is divisible by three")
    expect(divBy3(num3)).toEqual("-7 is not divisible by three")
    })
  })

//---->
//  FAIL  ./code-challenges.test.js
//   divisibletBy3
//   ✕  takes in a number and returns number is divisible by three (1 ms)

// ● divisibletBy3 ›  takes in a number and returns number is divisible by three


// b) Create the function that makes the test pass.

//************* PSEUDO 

// name the funcion called divBy3
// input- number
// use conditionals to evaluate if num is divisible by 3 
// set up template literals to use string interpolation `${}`




 const num1 = 15
// // Expected output: "15 is divisible by three"
 const num2 = 0
// // Expected output: "0 is divisible by three"
 const num3 = -7
// // Expected output: "-7 is not divisible by three"
const divBy3 = (number) => {
    if(number % 3 == 0){
        return `${number} is divisible by three`
    }else{ return `${number} is not divisible by three`}
}
console.log(divBy3(num1))
console.log(divBy3(num2))
console.log(divBy3(num3))

// PASS  ./code-challenges.test.js
// divisibletBy3
//   ✓  takes in a number and returns number is divisible by three (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.097 s, estimated 1 s


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("pascalCase", () => {
    it("takes an array of strings and returns an array with the first index of all letters capitilized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

    expect(pascalCase(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(pascalCase(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   pascalCase
//     ✕ takes an array of strings and returns an array with the first index of all letters capitilized

//   ● pascalCase › takes an array of strings and returns an array with the first index of all letters capitilized

//     ReferenceError: pascalCase is not defined

//--------------------------- PSUEDO

// name the funcion called pascalCase
// input- array 
// use built-in functions: .map, .toUpperCase, and .toLowerCase 
// 

// b) Create the function that makes the test pass.
 const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
 const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

const pascalCase = (input) => {
    return input.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();}

     )}

// console.log(pascalCase(randomNouns1))
// console.log(pascalCase(randomNouns2))

// [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]

// at Object.<anonymous> (code-challenges.test.js:155:9)

// console.log
// [ 'Temperature', 'Database', 'Chopsticks', 'Mango', 'Deduction' ]

// at Object.<anonymous> (code-challenges.test.js:156:9)

// PASS  ./code-challenges.test.js
// pascalCase
// ✓ takes an array of strings and returns an array with the first index of all letters capitilized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.155 s, estimated 1 s




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("findFirstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"

    expect(findFirstVowel( vowelTester1)).toEqual(1)
    expect(findFirstVowel(vowelTester2)).toEqual(0)
    expect(findFirstVowel(vowelTester3)).toEqual(2)
})
})


// FAIL  ./code-challenges.test.js
// findFirstVowel
//   ✕ takes in a string and logs the index of the first vowel

// ● findFirstVowel › takes in a string and logs the index of the first vowel

//   ReferenceError: findFirstVowel is not defined






// b) Create the function that makes the test pass.

//------------------------------- PSEUDO

// create a function called findFirstVowel
// variable vowel = aeiou
// input - string
// forLoop to loop through the string 

function findFirstVowel(string){
    let vowels = 'aeiou'
    for(let i =0; i<string.length; i++){
      if(vowels.includes(string[i])){
        return i
      }
    }
  }

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
console.log(findFirstVowel(vowelTester1));

console.log(findFirstVowel(vowelTester2));

console.log(findFirstVowel(vowelTester3))
