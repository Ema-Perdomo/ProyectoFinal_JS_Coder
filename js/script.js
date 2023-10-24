//              -ARRAYS-
const categorias = ["deportes", "musculacion", "aire libre" ];
//Array para almacenar inventario de productos - comienza vacío.
const productos = [];
//Array historial de compras - comienza vacío.
const carritoCompras = [];

//Mostrar elementos
for (let i = 0; i < carritoCompras.length; i++) {
    alert(carritoCompras[i])
}

//Constructor del objeto producto
class producto {
    constructor (nombre, categoria, precio, id) {
        this.nombre = nombre;
        this.tipo = categoria;
        this.precio = parseFloat(precio);
        this.id = id;
        this.vendido = false;
        this.descontado = false;
    }
    // 10 % de descuento
    descuento () {
        this.precio = this.precio - this.precio * 0.1;
        this.descontado = true;
    }
    estado() {
        this.vendido = true;
    }
}

//Productos:
productos.push(new producto ("pelota", "deportes", 50, 1));
productos.push(new producto ("mancuerna", "musculacion",100,2));
productos.push(new producto ("anillas", "aire libre", 25, 3 ));
productos.push(new producto ("botines", "deportes", 125, 4));
productos.push(new producto ("barra", "musculacion", 200, 5 ));

// const producto1 = new producto ("Pelota", "deportes", 100, 1);
// const producto2 = new producto ("Mancuernas", "musculacion", 50, 2);

//BOTONES

//boton del carrito funciona



//Ej de funcion que retorna funcion
function asignarOp(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

//Método Reduce() - high order function
const carrito = [];
// Resume el array a un unico valor  de retorno, en este caso se utiliza de total a pagar
const total = carrito.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(total)
//Posibles métodos a usar
//Encuentra categoria
const buscado = productos.find(producto => producto.categoria === "deportes");
//Se fija si existe un producto
const existe = productos.some(producto => producto.nombre === "pelota");
console.log(existe) //True
//Aplico un filtro al precio
const baratos = productos.filter(producto => producto.precio < 100);
//Filtro por descontados
const descontados = productos.filter(producto => producto.descontados == true);
console.log(descontados);
//Mapeo por nombres
const listaProductos = productos.map(producto => producto.nombre);
console.log(listaProductos);
// ["pelota","mancuernas",etc...]

//Traigo el elemento pelota del HTML
let pelota = document.getElementById("pelota");
