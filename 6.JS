let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));

let celsius = (fahrenheit - 32) * 5/9;

alert(fahrenheit + "°F corresponde a " + celsius.toFixed(2) + "°C.");
