const kelvin = 0;
const celsius = kelvin - 273;

let fahrenheit = celsius *(9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`A temperatura é ${fahrenheit} graus Fahrenheit`);