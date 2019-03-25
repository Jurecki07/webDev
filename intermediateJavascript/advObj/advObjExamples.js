

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


// Using arrow functions sometimes is not the best way, its best to avoid them
const robot = {
    energyLevel: 100,
    checkEnergy: () => {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
};
robot.checkEnergy();

// Rearranged this snippet without using an arrow function
const robot = {
    energyLevel: 100,
    checkEnergy(){
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
};
robot.checkEnergy();

// Reassigning a property the prepend property

const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)

    }
};
robot._energyLevel = 'high';

// Type-coercion unwanted side affect when mutating objects and there properties
const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)

    }
};
// Here it has been changed to a string when it was set to a increasing integer
robot._energyLevel = 'high';

robot.recharge(); //Recharged! Energy is currently at high30%.

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
};
// To call the getter method:
person.fullName; // 'John Doe'










