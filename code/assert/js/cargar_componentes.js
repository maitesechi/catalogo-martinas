// Carga los componentes comunes del sitio (footer, navbar y botón de WhatsApp)
// usando fetch() para traer el contenido HTML de cada archivo externo ubicado en /componentes.
// Inserta dinámicamente cada fragmento dentro del elemento correspondiente por su id.


async function cargarComponentes() {
    document.getElementById("footer").innerHTML = await (await fetch("componentes/footer.html")).text();
    document.getElementById("navbar").innerHTML = await (await fetch("componentes/navbar.html")).text();
    document.getElementById("whatsapp").innerHTML = await (await fetch("componentes/whatsapp.html")).text();
}
cargarComponentes();