let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

//--------------------------------------------------//

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

//------------------------------//

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4


let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
// Increase the value by 5 
powerLevel -= 100;
// Decrease the value by 100
multiplyMe *= 11;
//multiply the value by 11
quarterMe /= 4
// divide by 4

//--------------------------------------------------------

let a = 10;
a++;
console.log(a); // Output: 11
// increment by 1 ++

let b = 20;
b--;
console.log(b); // Output: 19
// decrement by 1 --

//-----------------

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

//---------------------------------

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

//--------------------------------

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

//------------------

//Constatnt kelvin variable
const kelvin = 293;

const celsius = kelvin - 273;

let fahrenheit = celsius *(9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

