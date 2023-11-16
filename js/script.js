//              -ARRAYS-
//Array para almacenar inventario de productos
const productos = [
    {
        "nombre": "Balón de fútbol",
        "precio": 140000,
        "categoria": "Fútbol",
        "id": 1,
        "descripcion": "Balón de fútbol de alta calidad, fabricado con materiales duraderos. Ideal para jugar al fútbol en cualquier superficie.",
        "linkImg": "https://i.imgur.com/3256e4y.jpg"
    },
    {
        "nombre": "Zapatillas de running",
        "categoria": "Running",
        "id": 2,
        "descripcion": "Zapatillas de running de alto rendimiento, diseñadas para ofrecer la máxima comodidad y soporte. Ideales para correr largas distancias.",
        "linkImg": "https://i.imgur.com/477y688.jpg"
    },
    {
        "nombre": "Bicicleta de montaña",
        "categoria": "Montañismo",
        "id": 3,
        "descripcion": "Bicicleta de montaña de alto rendimiento, diseñada para ofrecer la máxima estabilidad y control. Ideal para los amantes de la montaña.",
        "linkImg": "https://i.imgur.com/v69044h.jpg"
    },
    {
        "nombre": "Tabla de surf",
        "categoria": "Surf",
        "id": 4,
        "descripcion": "Tabla de surf de alta calidad, fabricada con materiales duraderos. Ideal para surfear en cualquier condición.",
        "linkImg": "https://i.imgur.com/2195548.jpg"
    },
    {
        "nombre": "Paleta de pádel",
        "categoria": "Pádel",
        "id": 5,
        "descripcion": "Paleta de pádel de alta calidad, fabricada con materiales duraderos. Ideal para jugar al pádel a un nivel avanzado.",
        "linkImg": "https://i.imgur.com/3452681.jpg"
    },
    {
        "nombre": "Raqueta de tenis",
        "categoria": "Tenis",
        "id": 6,
        "descripcion": "Raqueta de tenis de alta calidad, fabricada con materiales duraderos. Ideal para jugar al tenis a un nivel avanzado.",
        "linkImg": "https://i.imgur.com/5678901.jpg"
    },
    {
        "nombre": "Bádminton",
        "categoria": "Bádminton",
        "id": 7,
        "descripcion": "Raqueta de bádminton de alta calidad, fabricada con materiales duraderos. Ideal para jugar al bádminton a un nivel avanzado.",
        "linkImg": "https://i.imgur.com/0123456.jpg"
    },
    {
        "nombre": "Casco de moto",
        "categoria": "Motociclismo",
        "id": 8,
        "descripcion": "Casco de moto de alta calidad, fabricado con materiales duraderos y con la última tecnología de seguridad. Ideal para conducir una moto con seguridad.",
        "linkImg": "https://i.imgur.com/7890123.jpg"
    },
    {
        "nombre": "Esquís",
        "categoria": "Esquí",
        "id": 9,
        "descripcion": "Esquís de alta calidad, fabricados con materiales duraderos. Ideales para esquiar en cualquier condición.",
        "linkImg": "https://i.imgur.com/4567890.jpg"
    },
    {
        "nombre": "Patines en línea",
        "categoria": "Patinaje",
        "id": 10,
        "descripcion": "Patines en línea de alta calidad, fabricados con materiales duraderos. Ideales para patinar en cualquier superficie.",
        "linkImg": "https://i.imgur.com/1234567.jpg"
    }
];
//Array historial de compras - comienza vacío.
let carritoCompras = [];
let carritoLocStorage = JSON.stringify(localStorage.getItem("carritoLS"));
// //Si no hay anda en el localStorage (carrito de una anterior), se inicializa vacio


function crearProducto(nombre, descripcion, precio, categoria, id, linkImg) {
    let producto = `
    <div id=${id} class="card">
        <h3 class="tituloCard">${nombre}</h3>
        <p>${precio}</p>
        <div class="cuerpoCard">
            <p class="descripcionCard" >${descripcion}</p>
            <img class="imagenCard" src="${linkImg}" alt="">            
        </div>    
        <button onclick= (agregarAlCarrito(${id})) >Añadir al carrito</button>
    </div>
    `
    return producto;
}
//Para que cargue los productos ni bien carga la pag
window.onload = function () {
    let divProducto = document.getElementById("producto")
    productos.forEach(producto => {
        divProducto.innerHTML += crearProducto(producto.nombre, producto.descripcion, producto.precio, producto.categoria, producto.id, producto.linkImg)
    });

}

//Gurado carrito en el localStorage
function agregarAlCarrito(id) {
    carritoCompras.push(id);
    localStorage.setItem("carritoLS", carritoCompras);
    console.log(carritoCompras)
}

//CARRITO MEJOR CON storage y json, con sessionstorage
let botonCarrito = document.getElementById("botonCarrito");
// Display del carrito
botonCarrito.onclick = () => {
    // console.log("hola");
    //Si carrito no esta vacio lo muestro:
    if (carritoCompras.lenght != 0) {
        let carro = "";
        let contarCarro = contarCarrito(carritoCompras);
        let itemAnt = "";
        //muestro cada producto en él         
        for (const id of carritoCompras) {
            productos.forEach(producto => {
                if (id == producto.id){
                    carro += `${producto.nombre} ${producto.precio} USD ${contarCarro[id]} \n`;
                }
            });
        }
        alert(carro);
    } else {
        alert("El carrito se encuentra vacio.");
    }
};

function contarCarrito(carritoCompras) {
    //Contador de productos repetidos
    let contadorRepeticiones = [];
    for (const id of carritoCompras) {
        if (contadorRepeticiones[id]) {
            contadorRepeticiones[id]++
        } else {
            contadorRepeticiones[id] = 1
        }
    }
    return (contadorRepeticiones)
}




//Opciones del carrito: limpiar y comprar

//Mostrar elementos
// for (let i = 0; i < carritoCompras.length; i++) {
//     alert(carritoCompras[i])
// }

// //Constructor del objeto producto
// class producto {
//     constructor(nombre, categoria, precio, id) {
//         this.nombre = nombre;
//         this.tipo = categoria;
//         this.precio = parseFloat(precio);
//         this.id = id;
//         this.vendido = false;
//         this.descontado = false;
//     }
//     // 10 % de descuento
//     descuento() {
//         this.precio = this.precio - this.precio * 0.1;
//         this.descontado = true;
//     }
//     estado() {
//         this.vendido = true;
//     }
// }

// //Productos:
// productos.push(new producto("pelota", "deportes", 50, 1));
// productos.push(new producto("mancuerna", "musculacion", 100, 2));
// productos.push(new producto("anillas", "aire libre", 25, 3));
// productos.push(new producto("botines", "deportes", 125, 4));
// productos.push(new producto("barra", "musculacion", 200, 5));
// console.log(productos.nombre + "-" + productos.categoria);
// // const producto1 = new producto ("Pelota", "deportes", 100, 1);
// // const producto2 = new producto ("Mancuernas", "musculacion", 50, 2);

// //BOTONES

// //boton del carrito funciona

// //Ej de funcion que retorna funcion
// function asignarOp(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b;
//     } else if (op == "restar") {
//         return (a, b) => a - b;
//     }
// }

// //Método Reduce() - high order function
// const carrito = [];
// // Resume el array a un unico valor  de retorno, en este caso se utiliza de total a pagar
// const total = carritoCompras.reduce(
//     (acumulador, elemento) => acumulador + elemento,
//     0
// );
// console.log(total);
// //Posibles métodos a usar
// //Encuentra categoria
// const buscado = productos.find((producto) => producto.categoria === "deportes");
// //Se fija si existe un producto
// const existe = productos.some((producto) => producto.nombre === "pelota");
// console.log(existe); //True
// //Aplico un filtro al precio
// const baratos = productos.filter((producto) => producto.precio < 100);
// //Filtro por descontados
// const descontados = productos.filter(
//     (producto) => producto.descontados == true
// );
// console.log(descontados);
// //Mapeo por nombres
// const listaProductos = productos.map((producto) => producto.nombre);
// console.log(listaProductos);
// // ["pelota","mancuernas",etc...]

// //Traigo el elemento pelota del HTML
// let pelota = document.getElementById("pelota");
