// Nessa parte utilizamos o "Math.floor()" para arredondar o valor de variavel fahrenheit

const kelvin = 346;
const celsius = kelvin - 273;

let fahrenheit = celsius *(9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(fahrenheit);