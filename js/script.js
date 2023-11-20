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
//Si no hay nada en el localStorage (carrito de una anterior), se inicializa vacio
console.log(carritoLocStorage);
console.log(carritoLocStorage == null);
// if (carritoLocStorage.length !== 0) {
//     carritoCompras = carritoLocStorage;
// }

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
function borrarCarrito() {
    carritoCompras.forEach(elemento => {
        localStorage.removeItem(elemento)
    });
    carritoCompras = [];
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
    //Si carrito no esta vacio lo muestro:
    if (carritoCompras.length !== 0) {
        carritoCompras.sort();
        let carro = "";
        let contarCarro = contarCarrito(carritoCompras);
        let itemAnt;
        //muestro cada producto en él         
        for (const id of carritoCompras) {
            if (itemAnt != id) {
                productos.forEach(producto => {
                    if (id == producto.id) {
                        carro += `${producto.nombre} ${producto.precio} USD ${contarCarro[id]} \n`;
                        itemAnt = id;
                    }
                });
            }
        }
        Swal.fire({
            title: carro,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Pagar`,
            denyButtonText: `Continuar Comprando`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Gracias por su Compra!', borrarCarrito(), 'success')
            }
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El carrito se encuentra vacio',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
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