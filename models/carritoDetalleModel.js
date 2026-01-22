import connection from "../utils/db.js";

class CarritoDetalleModel {

  async buscarProducto(id_carrito, id_producto) {
    try {
        const [rows] = await connection.query(
        "SELECT * FROM carrito_detalle WHERE id_carrito=? AND id_producto=?",
        [id_carrito, id_producto]
        );
    return rows[0];
    } catch (error) {
        throw new Error("Error al buscar el producto en el carrito: " + error.message);
    }
  }

  async agregar(id_carrito, id_producto, cantidad, precio_unitario) {
    try {
        await connection.query(
        `INSERT INTO carrito_detalle 
        (id_carrito, id_producto, cantidad, precio_unitario)
        VALUES (?, ?, ?, ?)`,
        [id_carrito, id_producto, cantidad, precio_unitario]
        );
    } catch (error) {
        throw new Error("Error al agregar el producto al carrito: " + error.message);
    }
  }

  async actualizarCantidad(id_detalle, cantidad) {
    try {
        await connection.query(
        "UPDATE carrito_detalle SET cantidad=? WHERE id_detalle=?",
        [cantidad, id_detalle]
        );
    } catch (error) {
        throw new Error("Error al actualizar la cantidad del producto en el carrito: " + error.message);
    }
  }

  async obtenerDetalle(id_carrito) {
    try {
        const [rows] = await connection.query(
      `SELECT 
        cd.id_detalle,
        p.nombre,
        cd.cantidad,
        cd.precio_unitario,
        cd.subtotal
      FROM carrito_detalle cd
      JOIN productos p ON p.id_producto = cd.id_producto
      WHERE cd.id_carrito=?`,
      [id_carrito]
    );
    return rows;
    } catch (error) {
        throw new Error("Error al obtener los detalles del carrito: " + error.message);
    }
  }

  async limpiar(id_carrito) {
    try {
        await connection.query(
        "DELETE FROM carrito_detalle WHERE id_carrito=?",
        [id_carrito]
    );
    } catch (error) {
        throw new Error("Error al limpiar el carrito: " + error.message);
    }
  }
}

export default new CarritoDetalleModel();
