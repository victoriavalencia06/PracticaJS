//object
var productos = { nombre: "Café", precio: 3.50 };

var detalles = [
    { nombre: "Cafe", precio: 3.50 },
    { nombre: "Pan", precio: 2.50 },
    { nombre: "Leche", precio: 1.50 },
    { nombre: "Azucar", precio: 0.50 },
    { nombre: "Chocolatina", precio: 0.75 },
    { nombre: "Aceite", precio: 1.75 },
    { nombre: "Cereal", precio: 2.99 },
    { nombre: "Arroz", precio: 0.65 },
    { nombre: "Galletas", precio: 3.00 },
    { nombre: "Margarina", precio: 0.50 },
];

for (var i = 0; i < detalles.length; i++) {
    var fila = "<tr>";
        fila +=      "<td>" + detalles[i].nombre + "</td>";
        fila +=      "<td>$" + detalles[i].precio + "</td>";
        fila += "</tr > "

    document.getElementById("listaProducto").innerHTML += fila;
}