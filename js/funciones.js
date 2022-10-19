var subVentana=window.open("https://google.es","google","height=800, width=600");

setTimeout(()=> {
    var titulo =document.getElementById("pregunta");
    titulo.innerText="Sé solo feo";
    titulo.style.backgroundColor="blue";
    titulo.style.color="white";
    subVentana.close();
}, 6000); //el texto cambiará los 6 segundos

