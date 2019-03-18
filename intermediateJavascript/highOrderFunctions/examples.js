// Functions as data

let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();

is2p2.name()

////////////////////////////////////////////////////////////////////////////////



/* Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value.
It should call the argument function with the value two times. If the callback function produces the same result twice,
it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'
 */

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);

////////////////////////////////

