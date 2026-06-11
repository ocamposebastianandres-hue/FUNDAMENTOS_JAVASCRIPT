// 1. creamos una variable para guardar el valor del contador
let contador = 0;

// 2. capturamos los elementos del  html usando el id
const elementonumero = document.getElementById("contador");
const btnsumar = document.getElementById("btnsumar");
const btnrestar = document.getElementById("btnrestar");
const elementomensaje = document.getElementById("mensaje");

// 3. funcion para actualizar la pantalla y verificar condiciones
function actualizarPantalla() {
    elementonumero.textContent = contador;

    //condicional: si llega a 10, mostrar un mensaje
    if (contador === 10) {
        elementomensaje.textContent = "¡su puta madre! llegaste a 10🚀";
    } else {
        elementomensaje.textContent = "";
    }
}