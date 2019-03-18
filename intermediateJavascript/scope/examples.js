// A block of code works like this function
const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue
};
// Observe the block in an if statement:
if (dusk) {
    let color = 'pink';
    console.log(color); // pink
};
// Using Blocks and Scope

const city = "New York City";

function logCitySkyline (){
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());
///////////////////////////////////////////////////////////////

// Global Scope example
// Variables that are declared outside of a code block. So they can be access anywhere

const color = 'blue'

const returnSkyColor = () => {
    return color; // blue
};

console.log(returnSkyColor()); // blue

//Another Example

let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky (){
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}


console.log(callMyNightSky());

/////////////////////////////////////////////////////////////////////////

//USing Block scope
//When a varaible is defined inside a block it is only accesable within the {}
const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue
};

logSkyColor(); // blue
console.log(color); // ReferenceError


// Block scope example. calling lightwaves from outside the scope

function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);

}

logVisibleLightWaves();

console.log(lightWaves);
/////////////////////////////////////////////////////////////////////////////////////////////




