const tareas = require('./tareas.json');


const actualizarTareas = () => {
    const tareasActulizadas = [];

    tareas.forEach(tarea => {
        if(tarea.estado === "en proceso"){
            let tareaActualizada = {
                titulo : tarea.titulo,
                estado : "terminado"
            }
            tareasActulizadas.push(tareaActualizada)
        }else{
            tareasActulizadas.push(tarea)
        }
    })

    return tareasActulizadas
}

console.log(actualizarTareas());

const actualizarTareasConMap = () => {

    const tareasActulizadas = tareas.map(tarea => {
        if(tarea.estado === "en proceso"){
            let tareaActualizada = {
                titulo : tarea.titulo,
                estado : "terminado"
            }
            return tareaActualizada
        }
        return tarea
    })

    return tareasActulizadas
}

console.log(actualizarTareasConMap());


               