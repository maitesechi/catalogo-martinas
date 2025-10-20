// Función para incluir un archivo HTML dentro de un contenedor
function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error al incluir", file, error));
}
