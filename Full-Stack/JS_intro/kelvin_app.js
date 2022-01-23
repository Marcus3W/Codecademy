// Variable of todays temp. in kelvin
let kelvin = 0;
// Celsius is similar to Kelvin — Celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;
// To calculate fahrenheit
let fahrenheit = (Math.floor(celsius * (9/5) + 32));
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);