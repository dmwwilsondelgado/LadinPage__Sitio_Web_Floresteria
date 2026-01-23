import connection from "../config/db.js";
class PedidosDetalleModel{
    // Obtener detalles de un pedido
  async getDetallesByPedido(id_pedido) {
    try {
      const [result] = await connection.query(
        "SELECT * FROM pedido_detalle WHERE id_pedido = ?",
        [id_pedido]
      );
      return result;
    } catch (error) {
      throw new Error("Error al obtener los detalles del pedido: " + error.message);
    }
  }

  // Agregar detalle a un pedido
  async addDetalle(id_pedido, id_producto, cantidad, precio_unitario) {
    try {
      const [result] = await connection.query(
        "INSERT INTO pedido_detalle (id_pedido, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
        [id_pedido, id_producto, cantidad, precio_unitario]
      );
      return result.insertId;
    } catch (error) {
      throw new Error("Error al agregar detalle: " + error.message);
    }
  }

  // Eliminar detalle
  async deleteDetalle(id_detalle) {
    try {
      const [result] = await connection.query(
        "DELETE FROM pedido_detalle WHERE id_detalle = ?",
        [id_detalle]
      );
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error al eliminar detalle: " + error.message);
    }
  }

  // Obtener direcciones de un usuario
  async getDireccionesByUsuario(id_usuario) {
    try {
      const [result] = await connection.query(
        "SELECT * FROM direcciones WHERE id_usuario = ?",
        [id_usuario]
      );
      return result;
    } catch (error) {
      throw new Error("Error al obtener direcciones: " + error.message);
    }
  }
}

export default new PedidosDetalleModel();