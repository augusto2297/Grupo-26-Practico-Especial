alert("Usar alert es mala práctica");

let primerBtn = document.querySelector("#primer-btn").addEventListener("click", desplegarMensaje);
let segundoBtn = document.querySelector("#segundo-btn").addEventListener("click", () => {
    alert("Aunque usar alert sea una mala práctica, explico lo que hace una arrow function:" +
        "otra forma de usar funciones. Y oculto los elementos con la clase 'hideable'");
    let hideableElems = document.querySelectorAll(".hideable");
    for (let elem in hideableElems) {
        if (elem.style.display != "none") {
            elem.style.display = "none";
        } else {
            elem.style.display = "";
        }
    }
});
let mensajeJS = document.querySelector("#mensajeJS")

function desplegarMensaje() {
    mensajeJS.innerHTML = "Desplegamos nuestro primer mensaje con un boton"
}