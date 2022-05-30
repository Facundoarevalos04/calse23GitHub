const tareas = require('./tareas.json');

console.log("*********************************");

for (let i = 0; i < tareas.length; i++) {
    console.log(`${i + 1}.- ${tareas[i].titulo}, estado: ${tareas[i].estado}`);
}

console.log("*********************************");

tareas.forEach((tarea,i) => {
    return console.log(`${i + 1}.- ${tarea.titulo}, estado: ${tarea.estado}`);
});

console.log("*********************************");

[2,3,4].forEach(numero => console.log(numero));

["palabra"].forEach(numero => console.log(numero));