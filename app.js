// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// iniciarlizar variable Array
let amigos = [];

// función para agregar amigos al array
function agregarAmigo() {
    // Capturar el valor del input
    let nombreAmigo = document.querySelector("#amigo").value.trim();

    // Validar que el nombre no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el input
    document.querySelector("#amigo").value = "";

    // Llamar a la función para mostrar los amigos
    mostrarAmigos();

}

// función para mostrar los amigos en la lista
function mostrarAmigos() {
    // Seleccionar el elemento de la lista
    let lista = document.querySelector("#listaAmigos");

    // Limpiar la lista antes de mostrar los amigos
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear un elemento de lista para cada uno
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // crear el <li>
        li.textContent = amigos[i]; // asignar el nombre del amigo al contenido del <li>
        lista.appendChild(li); // agregar el <li> a la lista
    } 
}

// función para sorter los amigos
function sortearAmigo() {
    // Validar que haya al menos dos amigos para sortear
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer un sorteo.");
        return;
    }

    // Seleccionar un amigo aleatorio del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Mostrar el nombre del amigo seleccionado
    let amigoSeleccionado = amigos[indiceAleatorio];
    let resultado = document.querySelector("#resultado");
    resultado.textContent = `Felicidades, Tú amigo secreto es: ${amigoSeleccionado}`; // mostrar mensaje amigo seleccionado
} 
