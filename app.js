// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos
let amigos = [];

// Validación común de nombres
function validarNombre(nombre, original = "") {
    const limpio = nombre.trim();

    if (!limpio) return "Por favor, ingresa un nombre válido.";
    if (limpio.length < 2 || limpio.length > 30) return "El nombre debe tener entre 2 y 30 caracteres.";
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(limpio)) return "El nombre solo puede contener letras y espacios.";
    if (/(.)\1{2,}/.test(limpio)) return "El nombre no puede tener más de 2 letras repetidas consecutivas.";
    if (!/[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(limpio)) return "Ese no parece un nombre real.";

    const repetido = amigos.some(n => n.toLowerCase() === limpio.toLowerCase());
    if (repetido && limpio !== original) return "Este nombre ya está en la lista.";

    return null; // válido
}

// Agregar amigo
function agregarAmigo() {
    const input = document.querySelector("#amigo");
    const nombre = input.value.trim();
    const error = validarNombre(nombre);

    if (error) return alert(error);

    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();
    document.querySelector(".button-reset").disabled = false;
}

// Agregar con Enter
document.querySelector("#amigo").addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        agregarAmigo();
    }
});

// Mostrar lista de amigos
function mostrarAmigos() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.classList.add("nombre-item");

        const span = document.createElement("span");
        span.textContent = nombre;
        li.appendChild(span);

        // Botón editar
        const btnEditar = document.createElement("button");
        btnEditar.innerHTML = "✏️";
        btnEditar.className = "btn-editar";
        btnEditar.setAttribute("aria-label", `Editar a ${nombre}`);
        btnEditar.onclick = () => editarNombre(index, nombre, li);
        li.appendChild(btnEditar);

        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "✖";
        btnEliminar.className = "btn-eliminar";
        btnEliminar.setAttribute("aria-label", `Eliminar a ${nombre}`);
        btnEliminar.onclick = () => {
            amigos.splice(index, 1);
            mostrarAmigos();
            actualizarBotones();
        };
        li.appendChild(btnEliminar);

        lista.appendChild(li);
    });
}

// Actualizar estado de botones según la cantidad
function actualizarBotones() {
    document.querySelector(".button-reset").disabled = amigos.length === 0;
}

// Editar nombre
function editarNombre(index, original, li) {
    li.innerHTML = "";

    const input = document.createElement("input");
    input.type = "text";
    input.value = original;
    input.className = "input-editar";

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "✅";
    btnGuardar.className = "btn-guardar";
    btnGuardar.onclick = () => {
        const nuevoNombre = input.value.trim();
        const error = validarNombre(nuevoNombre, original);
        if (error) return alert(error);

        amigos[index] = nuevoNombre;
        mostrarAmigos();
    };

    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "❌";
    btnCancelar.className = "btn-cancelar";
    btnCancelar.onclick = () => mostrarAmigos();

    li.append(input, btnGuardar, btnCancelar);
}

// Sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) return alert("Necesitas al menos dos amigos para hacer un sorteo.");

    let intentos = 0, max = 1000, asignaciones;

    while (intentos++ < max) {
        const mezcla = [...amigos].sort(() => Math.random() - 0.5);
        asignaciones = new Map();
        let valido = true;

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === mezcla[i]) {
                valido = false;
                break;
            }
            asignaciones.set(amigos[i], mezcla[i]);
        }

        if (valido) break;
    }

    if (intentos === max) return alert("No se pudo realizar el sorteo. Intenta nuevamente.");

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
    asignaciones.forEach((asignado, original) => {
        const li = document.createElement("li");
        li.textContent = `${original} tiene de amigo secreto a ${asignado}`;
        resultado.appendChild(li);
    });
}

// Reiniciar lista
function reiniciar() {
    amigos = [];
    mostrarAmigos();
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector(".button-reset").disabled = true;
    document.querySelector("#amigo").value = "";
}