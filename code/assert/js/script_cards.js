// Carga los productos desde el archivo productos.json y los muestra como cards en el HTML.
// Usa fetch() para obtener los datos, recorre cada producto y genera dinámicamente el HTML
// con su imagen, nombre, precio y enlace. Inserta las cards dentro del contenedor con id="lista-productos".


fetch("data/productos.json")
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.getElementById("lista-productos");

    productos.forEach(p => {
      const card = `
        <a href="producto.html?id=${p.id}" class="text-decoration-none text-dark">
          <div class="card producto-decoration parrafo-custom" style="width: 18rem;">
            <img src="${p.imagen1}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body text-center">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">${p.precio.toLocaleString('es-AR')}</p>
            </div>
          </div>
        </a>
      `;
      contenedor.innerHTML += card;
    });
  })
  .catch(error => console.error("Error al cargar productos:", error));
