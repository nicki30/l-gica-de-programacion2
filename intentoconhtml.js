/document.getElementById("formulariotemperatura").addEventListener("convertir",function(event))
event.preventDefault();

const temperatura = parseFloat(document.getElementById("temperatura").value);
const unidad = document.getElementById("unidad").value;

const temperaturaConvertida;
const resultado:

if (unidad === "celsius") {
    temperaturaConvertida = {
        fahrenheit : temperatura * 9/5 + 32,
        kelvin : temperatura + 273.15
    };
} else if (unidad === "fahrenheit"){
    temperaturaConvertida = {
        celsius : (temperatura - 32) * 5/9,
        kelvin : (temperatura - 32) * 5/9 +273.15
    };
} else if (unidad ==="kevin") {
    temperaturaConvertida = {
        celsius : temperatura - 273.15,
        fahrenheit : (temperatura - 273.15) * 9/5 +32
    };
}

document.getElementById("temperaturaConvertida")