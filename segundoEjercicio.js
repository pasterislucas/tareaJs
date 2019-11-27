function tirarDados(){

    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
           // console.log("dado a: "+i+" dado b: "+j);
            //alert("dado a: "+i+" dado b: "+j); 
            // valor = "dado a: "+i+" dado b: "+j;
            // alert(valor)
            document.getElementById("tirarDados").innerHTML = "dado a: "+i+" dado b: "+j;
        }
       // console.log(" ");
        
    }
}