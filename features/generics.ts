class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfTypes<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

// Generics with functions

function printAnything<T>(arr: T[]) {
    arr.forEach(elem => console.log(elem));
}

printAnything<string>(['a', 'b', 'c']);

// Generic Constraints

class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

// ----------------------- Generic Constraint
function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++)
        arr[i].print();
};

printHousesOrCars<House>([new House(), new House()]);
