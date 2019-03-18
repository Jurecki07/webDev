/// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.
//
// You may use any form of callback you prefer.


//Basic
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(function(fruitItem){
    console.log('I want to eat a ' + '' + fruitItem);
});
console.log(fruitItem);

// Using an arrow function
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruitItem => console.log(fruitItem));
console.log(fruitItem);

////

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)

const secertMessage = animals.map(animal => animal[0]);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
    return word.length < 6;
}));
// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});

// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => {return word.length > 5}));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);





