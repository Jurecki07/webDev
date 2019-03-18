



if (true) {
    console.log('This message will print!'); 
  } 
  // Prints "This message will print!"

// ----------------------------------------------------------
  if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
  // Prints "But the code in this block will!"

  // -----------------------------------------------------------

  let hungerLevel = 7;

if (hungerLevel > 7){
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}
  // -----------------------------------------------------------

  // When we use the && operator, we are checking that two things are true:

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

  // -----------------------------------------------------------


// If we only care about either condition being true, we can use the || operator:

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}


  // -----------------------------------------------------------


// The ! not operator reverses, or negates, the value of a boolean:
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// --------------------------------------------

let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}


// ------------------------------------------------

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

// ------------------------------------------------


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// ------------------------------------------------


// Truthy and Falsy Assignment

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

let defaultName = username || 'Stranger';

// When running default name checks the left hand condtion first if its true then username prints to the console. Otherwise Stranger (false)
// is printed.

// Ternary Operator replacing the if else statment 

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// can also be written in the if else way 

if (isLocked) {
  console.log('You will need a key to open the door');
} else {
  console.log('You will not need a key to open the door ');
}

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

if (isCorrect) {
  console.log('Correct')
} else {
  console.log ( 'Incorrect!');
}

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

if (favoritePhrase){
  console.log('I Love that!')
} else {
  console.log('I dont love that!');
}

// Else If Statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// The switch conditional statment 

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!')
    break;
  case 'second place':
    console.log('You get the silver medal!')
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default:
    console.log('No medal awarded.')
    break;
    
    
}

// Using Arrow functions //

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
// Same function as above but just using the arrow function //
const plantNeedsWater = (day) => {
    if (day === 'Wednesday'){
        return true;
    } else {
        return false;

    }
};
