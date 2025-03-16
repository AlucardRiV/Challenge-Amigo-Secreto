// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
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
// Con la siguiente linea debera actualizar los codigos

// Se confirman cambios a traves de prueba y error en lineas, se consulta con alumnos del Curso de alula para tener un feedback mejor

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpia la lista actual

    amigos.forEach((amigo) => {
        const li = document.createElement('li'); //Confirmar una platica en equipo de consulta para entender correctamente funcion para futuras referencias
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
// Funcion para Elegir al Amigo Secreto de manera Aleatoria

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista."); // Si no se agrega ningun nombre manda mensaje de error
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    const indiceGanador = Math.floor(Math.random() * amigos.length); // Debera seleciconar el nombre de manera aleatoria
    const ganador = amigos[indiceGanador]; // Nombre del ganador?

    const li = document.createElement('li');
    li.textContent = `¡El ganador es: ${ganador}!`; //Mensaje de felicitacion
    resultado.appendChild(li);
}