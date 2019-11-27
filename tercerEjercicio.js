var numeroNegativo = 0;
var numeroPositivo = 0;


while (valor !=0) {
    var valor = prompt("Ingrese el valor")
    if (valor > 0) {
        numeroPositivo++;
        console.log(numeroPositivo);
    } 
    if(valor < 0) {
         numeroNegativo++;
        console.log("- "+numeroNegativo);
    }
}

console.log("Los numeros positivos son "+numeroPositivo);
console.log("Los numeros negativos son "+numeroNegativo);

alert("Los numeros positivos son "+numeroPositivo+ " y "+"Los numeros negativos son "+numeroNegativo)

