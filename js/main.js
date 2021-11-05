alert ("Usar alert es mala práctica");

let primerBtn = document.querySelector ("#primer-btn").addEventListener ("click", desplegarMensaje);

function desplegarMensaje () {
    cmensajeJS.innerHTML = "Desplegamos nuestro primer mensaje con un boton"
}