for (let i = 0; i < 0; i++) {

}

///////////////

for (let counter = 0; counter < 4; counter++ ){
    console.log(counter);
    // let counter = o so the loop starts counting at 0
    //the stopping condtion counter < 4, the loop will run as long as counter is less then 4
    // coounter++ iteration statment.. after each loop the value of counter will increase by 1
    // the {} is the code block that will execute until the condtion is false ( greater then or equal to 4)

}

// Here we have created a loop that will priint 5 through 10 to console

for (let counter = 5; counter < 11; counter++){
    console.log(counter);
    // 5 6 7 8 9 10
}


////////

// Counting in reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
// >= counting backwards
// -- decrease by 1
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
    // 3 2 1 0
}
////////////////////////////////////////////////////////////////////////////////////////

// Write a for loop the goes through the array and prints a message to the console
const vacationSpots = ['Bali', 'Paris', 'Tulum'];


for (let i = 0; i < vacationSpots.length; i++ ){
    console.log('I would love to visit ' + vacationSpots[i]);
}

/////////////////////////////////////////////////////

// Nested Loops

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j])
        }
    }
};

// Here is another example
// off using a nested loop
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];



// first loop goes through bobs followers
for (let i = 0; i < bobsFollowers.length; i++) {
    // with the length method we go through the entire array
    for (let j = 0; j < tinasFollowers.length; j++) {
        //Same for 2nd loop
        // Conditonal to check whats equal and then we push
        // from push bobs to mutal vaiable
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
};
//////////////////////////////////////////////

// Using the while loop
// lets convert from for to while

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
}

// A while loop that prints 1, 2, and 3

//CounterTwo variable declared before the loop, it is global.
let counterTwo = 1;
//1st stopping condontion is countertwo is greater then 4
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}

/////////////////////////////////

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
// Empty variable
let currentCard;

// Starting loop runs the loop until currentCard is not equal to spade
while ( currentCard != 'spade') {
    // using math.random to index the cards array
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}






