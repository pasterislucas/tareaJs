
function calcular() {

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    
    var resultado =  peso / (altura * altura);
    var edad = prompt('instroduzca su edad' );
    console.log(edad);
    
    if (edad < 45) {
        if (resultado < 22,00) {
                alert("Su IMC es "+ resultado +" y es un valor Bajo")
                
        } else {
                alert("Su IMC es "+ resultado +" y es un valor Medio")
        }
    }else{
        if (resultado < 22,00) {
            alert("Su IMC es "+ resultado + " y es un valor Medio")
    } else {
            alert("Su IMC es " +resultado + " y es un valor Alto")
    }
    }
    

}
