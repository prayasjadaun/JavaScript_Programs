// Question-4 ---JavaScript Program to Convert Celsius to Fahrenheit


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


const celsiusTemperature = 20;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
