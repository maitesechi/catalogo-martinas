// Obtener el detalle del producto según el ID en la URL
// Lee el id de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("data/productos.json")
    .then(response => response.json())
    .then(productos => {
        const producto = productos.find(p => p.id == id);
        if (producto) {
            document.getElementById("nombre").textContent = producto.nombre;
            document.getElementById("descripcion").textContent = producto.descripcion;
            document.getElementById("precio").textContent = producto.precio;
            document.getElementById("imagen-1").src = producto.imagen1;
            document.getElementById("imagen-2").src = producto.imagen2;
            document.getElementById("imagen-3").src = producto.imagen3; 
            document.getElementById("colores").textContent = producto.colores;
            document.getElementById("talles").textContent = producto.talles;
        } else {
            console.error("Producto no encontrado");
        }
    })
.catch(error => console.error("Error al cargar productos:", error));

