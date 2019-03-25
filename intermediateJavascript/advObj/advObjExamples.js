

//Make Sound is a method within out goat object.

const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    }
};
goat.makeSound() // Prints baa

/// Outside of scope example
const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(dietType);
    }
};
goat.diet();  // is undefined because it is not in the scope of our object

// Using this keyword references  to the calling object
// The calling object is goat and by using this accessing the goat object itself and
// then dietType property of goat by dot notation

const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
};

goat.diet();
// Output: herbivore

// Using string interpolation make sure to use the ampersand above tab
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }};

console.log(robot.provideInfo());
