
function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value; 
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result"); 

    let alcoolSpan = document.getElementById("alcool-result");
    let gasolinaSpan = document.getElementById("gasolina-result");

    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7){
        //compensa usar álcool
        textResult.innerHTML = "Compensa usar Álcool";
    }else{
        //compensa usar gasolina
        textResult.innerHTML = "Compensa usar Gasolina";
    }

      alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput;
      gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;

    contentResult.classList.remove("hide")
}