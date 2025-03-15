// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Aqui agregaremos el nombre del "Amigo" en la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre); // Se agrega el "nombre" a la lista
        input.value = ""; // Se limpia el campo
        actualizarListaAmigos(); // Se actualiza la lista
    } else {
        alert("Por favor, ingresa un nombre válido."); // Alerta cuando el campo esta vacio
    }
}
