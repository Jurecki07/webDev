

// Making our first array

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

/////////////////////////////////////////////////////////////////////////////

// Here we are getting data from our array. and printing to the console.

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(famousSayings[2]);

console.log(famousSayings[3]);

///////////////////////////////////////////////////////////////////////////////////////

// Here we are changing our list in the array to another value

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

/*
///////////////////////////////////////////////////////////////////////////////////

 Let vs Const in assigning a array variable
*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';

console.log(utensils);

////////////////////////////////////////////////////////////////////////////////////////////////////\\\\\\\\\\\//\/

// Using .Length to find the Output of an array

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log (objectives.length); // Output: 3

////////////////////////////////////////////////////////////////////

//Using the .push() method
//With this we can add items to the end of an array
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

///////////////////////////////////////////////////////////

//Using the .push method to removes the last item of an array
//Here we are setting the method to a varaible


const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// Another ex of doing a .pop() method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores)

////////////////////////////////////////////////


//////using  dif methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);
///////////////////////////////////

groceryList.unshift('popcorn');

console.log(groceryList);

/////////////////////////////////////////

console.log(groceryList.slice(1, 4));

console.log(groceryList);
////////////////////////////////////////////////////

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

/////////////////////////////////////////////////////////////////////

//// Using functions within an array

/// This all works because the array is a global scope !!!!!!!!!!


// Here is our array
const concept = ['arrays', 'can', 'be', 'mutated'];
/// Create a function called changeArr with a parameter of arr
function changeArr(arr){
    /////changeArr that will assign the element in index 3 of an array to 'MUTATED'.
    arr[3] = 'MUTATED';
}
///Calling the function changeArr with a paramter of our array
changeArr(concept);

// This has been change to array can be mutated
console.log(concept);

///creating a function removeelement with a para of Newarr
const removeElement = newArr => {

    newArr.pop()
}

removeElement(concept);

console.log(concept);

//////////////// Using Nested arrays or arrays inside an array

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

////////////////////////////////////////









































