// Carga los productos desde el archivo productos.json y los muestra como cards en el HTML.
// Usa fetch() para obtener los datos, recorre cada producto y genera dinámicamente el HTML
// con su imagen, nombre, precio y enlace. Inserta las cards dentro del contenedor con id="lista-productos".


fetch("data/productos.json")
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.getElementById("lista-productos");

    productos.forEach(p => {
      const card = `
        <a href="${p.link}" class="text-decoration-none text-dark">
          <div class="card producto-decoration" style="width: 18rem;">
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body text-center">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">$${p.precio.toLocaleString('es-AR')}</p>
            </div>
          </div>
        </a>
      `;
      contenedor.innerHTML += card;
    });
  })
  .catch(error => console.error("Error al cargar productos:", error));
