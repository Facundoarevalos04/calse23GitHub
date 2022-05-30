const tareas = require('./tareas.json');

function filtrarTareas(estado) {

    const tareasFiltradas = [];
    tareas.forEach((tarea) => {   
        if (tarea.estado === estado) {
            tareasFiltradas.push(tarea)
        }
    });
    return tareasFiltradas
}

console.log(filtrarTareas("terminado"));

const filtrarTareasConFilter = (estado) => {
    const tareasFiltradas = tareas.filter(tarea => tarea.estado === estado)
    return tareasFiltradas
}
console.log(filtrarTareasConFilter("terminado"));





