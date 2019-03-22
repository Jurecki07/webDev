let spaceship = {}; // spaceship is an empty object


// An object literal with two key-value pairs
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;// Returns 5 (Number)

let planetArray = spaceship.flightPath; // Returns an (array) [ 'Venus', 'Mars', 'Saturn' ]

// How a function is setup with Bracket Notation
let returnAnyProp = (objectName, propName) => objectName[propName];

//using bracket notation
let isActive = spaceship['Active Mission'];
console.log(isActive); // Returns True

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

//Change the color in spaceship property
spaceship.color = 'New Color';

// Add a new property to spaceship
spaceship.numEngines = 9;

//Delete a property in spaceship
delete spaceship['Secret Mission'];

//Using Methods in Javascript

let retreatMessage = 'We no longer wish to conquer your planet. ' +
    'It is full of dogs, which we do not care for.';

//Retreat is the method
let alienShip = {
    retreat() {
        console.log(retreatMessage)
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
};

//Invoking your 2 methods created
alienShip.retreat();//returns retreat message

alienShip.takeOff();//returns takeOff
