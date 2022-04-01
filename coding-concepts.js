// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer:
// b) Verify and explain:


// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student'
// b) Verify and explain:
//undefined missing a return statement

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:[8, 10, 12, 14, 16] HOF using .map to mulitply array by 2



// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: [11, 13, 15] Used .filter to get odd values


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: ["JavaScript"]
// b) Verify and explain:JavaScript the first index(Javascript) or the object languages was being called.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer:{name: "George", cohort: "Bravo", year:"2022"}
// b) Verify and explain: {name: "George", cohort: "Bravo", year:"2022"}
//learnStudent is a child class with the instance of name: George created but it inherits the rest of the dat from the parent class: Learn since they are static and not dynamic like name is.
