document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.querySelector(".contenedor");
    const boton = document.getElementById("saludarButton");
  
    contenedor.addEventListener("click", function(event) {
        if (event.target === boton) {
            mostrarAlerta();
        } else if (event.target === contenedor) {
            alert("Hola! Soy el div");
        }
    });
  
    function mostrarAlerta() {
        alert("Hola!");
    }
});
/*document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.querySelector(".contenedor");
  
    contenedor.addEventListener("click", function() {
      alert("Hola! Soy el div");
    });
  
    function mostrarAlerta(event) {
        if (event.target.id === "saludarButton") {
            alert("Hola!");
        }
    }

    /*function mostrarAlerta(event) {
    if (event.target.id === "saludarButton") {
        alert("Hola!");
    }
    

});
*/
  
  
  
  
  
  