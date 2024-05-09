function convertirTemperatura() {
    let temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");
   
    // Verificar si la entrada es un número
    if (isNaN(temperaturaCelsius)) {
        console.error("Error: La temperatura ingresada no es un número.");
        convertirTemperatura(); // Volver a solicitar los datos
        return;
    }
   
    // Convertir temperatura a grados Fahrenheit y Kelvin
    let temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;
    let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;
   
    // Imprimir resultados
    console.log("Grados Fahrenheit:", temperaturaFahrenheit.toFixed(2));
    console.log("Grados Kelvin:", temperaturaKelvin.toFixed(2));
}
 
convertirTemperatura();
 