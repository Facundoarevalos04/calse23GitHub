const tareas = require('./tareas.json');


const buscarTarea = (palabra) => {

    let resultado = tareas.find(tarea => tarea.titulo.includes(palabra))

    return resultado

}

console.log(buscarTarea('calculadora'))