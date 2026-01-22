const API_URL = "http://localhost:3000/api/productos";

async function cargarProductos() {
  try {
    const res = await fetch(API_URL);
    const productos = await res.json();

    const tbody = document.getElementById("tabla-productos");
    tbody.innerHTML = "";

    productos.forEach(p => {
      tbody.innerHTML += `
        <tr>
          <td>${p.id_producto}</td>
          <td>${p.nombre}</td>
          <td>$${p.precio}</td>
          <td>${p.stock}</td>
          <td>
            <img src="http://localhost:3000${p.url_imagen}" width="80">
          </td>
        </tr>
      `;
    });

  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

cargarProductos();
