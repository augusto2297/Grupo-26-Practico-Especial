alert ("Usar alert es mala práctica");

let primerBtn = document.querySelector ("#primer-btn").addEventListener ("click", desplegarMensaje);
let mensajeJS = document.querySelector ("#mensajeJS")

function desplegarMensaje () {
    mensajeJS.innerHTML = "Desplegamos nuestro primer mensaje con un boton"
}