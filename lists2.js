let nums = [2, 12, 4, 5, 2, 6,]
let currentMax = 0
let currentMin = 10000000
let oddNumberCount = 0
let animalYes = 0

//Maximum Number
nums.forEach(num => {
    if (num > currentMax) {
      currentMax = num  
    }
});

console.log(`The Max is ${currentMax}`)


//Mininum Number
nums.forEach(num => {
    if (num < currentMin) {
      currentMin = num  
    }
});

console.log(`The Min is ${currentMin}`)


//Odd Number Finder
nums.forEach(num => {
    if (num % 2 === 1)
    oddNumberCount = oddNumberCount + 1
})
console.log(`There are ${oddNumberCount} odd numbers.`)


//Zoo Animal
let animals = ['Zebra', 'Giraffe', 'Lion']
let favAnimal = 'Panda'

animals.forEach(animal => {
    if (animal === favAnimal) {
        animalYes = 1
    }
})

if (animalYes === 1) {
    console.log(`${favAnimal} is at the zoo`)
} 
else {
    console.log(`${favAnimal} is not at the zoo`)
}


//Temperature Detector
let tempsF = [60, 100, 95, 73]
let tempsC = [0]

tempsF.forEach(tempF => {
    tempsC.push((tempF - 32) * 5/9)
})
console.log(`Temperatures in C: ${tempsC}`)


//First divisible by 5
let numFound = 0
nums.forEach(num => {
    if (numFound === 0) {
    if (num % 5 === 0) {
        console.log(`The first number divisible by 5 is ${num}`)
        numFound = 1
    }
    }
})