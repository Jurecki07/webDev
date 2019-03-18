
// Writing a function ///

function getReminder(){
    console.log('Water the plants.')
  }
  
  function greetInSpanish(){
    console.log('Buenas Tardes.')
  }

  // Calling your function //

  function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  
  sayThanks();

// Passing in parameters 

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');
// Here we are adding a parameter name and useing cole as an argument 

  
// Default Parameter's

// calling makeshoppinglist() will run the items assigned or the default values however if you pass an argument into the function
//like bob then that will be assigned to the first parameter 

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  makeShoppingList();
  
  makeShoppingList('bob');

  // Using the return statemnet within a function

const numOfMonitors = monitorCount (5,4);


function monitorCount(rows, columns){
  return rows * columns
}

console.log (numOfMonitors)

// Using Helper Functions or a function within a function

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors (rows, columns){
    return monitorCount (rows,columns) * 200
  }
  
  const totalCost = costOfMonitors (5,4);
  
  console.log(totalCost)
  

  // Using function expressions or a variable that is equal to a function ( anon function)

  const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  };
  
  plantNeedsWater('Tuesday');
  
  console.log(plantNeedsWater('Tuesday'));
  
  