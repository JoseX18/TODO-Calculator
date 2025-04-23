let actividades = [];

document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.querySelector("button");
    btnAgregar.addEventListener("click", agregarActividad);
});

function agregarActividad() {
    const inputNuevaActividad = document.getElementById("nuevaActividad");
    const nuevaActividad = inputNuevaActividad.value;

    if (nuevaActividad) {
        actividades.push(nuevaActividad);
        inputNuevaActividad.value = "";
        mostrarActividades();
    }
}

function mostrarActividades() {
    const listaActividades = document.getElementById("listaActividades");
    listaActividades.innerHTML = "";

    actividades.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = `${tarea}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "x";

        btnEliminar.addEventListener("click", () => eliminarActividad(index));

        btnEliminar.classList.add('btnX');
        li.classList.add('liActividad');

        li.appendChild(btnEliminar);
        listaActividades.appendChild(li);

    });
}

function eliminarActividad(index) {
    if (index >= 0 && index < actividades.length) {
        actividades.splice(index, 1);
        mostrarActividades();
    }
}