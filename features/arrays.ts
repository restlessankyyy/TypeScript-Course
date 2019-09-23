const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake : string[][] = []

// Help with inference when extracting values.
const carA = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values.
// carMakers.push(100);

// Help with mao.
carMakers.map((car: string): string => car);

// Flexible types
const importantDates = [new Date(), '2030-10-10'];