//Assignment no.5
// Convert all into Farenhite by once
// Array of temperatures in Celsius
var temperaturesCelsius = [15, 23, 18, 27, 30, 25, 19, 22, 28, 16, 20, 24, 21, 29, 17];

// Convert to Fahrenheit
var temperaturesFahrenheit = temperaturesCelsius.map(temp => (temp * 9 / 5) + 32);

// Output the results
console.log("Temperatures in Celsius: ", temperaturesCelsius);
console.log("Temperatures in Fahrenheit: ", temperaturesFahrenheit);
// Convert all into farenhite one by one
// Array of temperatures in Celsius
var temperaturesCelsius = [15, 23, 18, 27, 30, 25, 19, 22, 28, 16, 20, 24, 21, 29, 17];

// Initialize an empty array to store temperatures in Fahrenheit
var temperaturesFahrenheit = [];

// Iterate over the array and convert each temperature to Fahrenheit
for (let i = 0; i < temperaturesCelsius.length; i++) {
    const fahrenheit = (temperaturesCelsius[i] * 9 / 5) + 32; // Conversion formula
    temperaturesFahrenheit.push(fahrenheit); // Add the result to the new array
    console.log(`Converting ${temperaturesCelsius[i]}°C to ${fahrenheit}°F`);
}

