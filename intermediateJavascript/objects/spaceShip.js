let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        backup: {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
// Evaluates to spaceship->Nano->
// We accessed the back-up object by appending ['back-up'].
// The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'
console.log(spaceship.nanoelectronics['back-up'].battery); // Returns 'Lithium'

//capFav is set too the 0th index within captain's favorite foods
let capFave= spaceship.crew.captain['favorite foods'][0];

//Assign passengers a value instead of null
spaceship.passengers = [{'name':'Tyler'}];

// var firstPassenger set to passenger index 0
let firstPassenger = spaceship.passengers[0];

///////////////////////////////

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

//Function of greenEnergy that has an object as an parameter and sets the obj fuel type to avacado oil
let greenEnergy = obj =>{
    obj['Fuel Type'] ='avocado oil';
};

// Function of remotelyDisable with an object as a parameter sets disabled property too true
let remotelyDisable = obj => {
    obj.disabled = true;
};









