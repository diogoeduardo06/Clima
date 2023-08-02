const kelvin = 346
const celsius = kelvin - 273

let fahrenheit = celsius *(9/5) + 32

fahrenheit = Math.floor(fahrenheit)

let newton = celsius *(33/100)

newton = Math.floor(newton)

// console.log(`A temperatura é ${newton} graus Fahrenheit`)

console.log(`A temperatura em escala Newton é ${newton}°N `)