import connection from "../db.js";

class PedidosModel {
  // Obtener todos los pedidos
  async getAllPedidos() {
    try {
      const [result] = await connection.query("SELECT * FROM pedidos");
      return result;
    } catch (error) {
      throw new Error("Error al obtener los pedidos: " + error.message);
    }
  }

  // Obtener pedido por ID
  async getByIdPedido(id) {
    try {
      const [result] = await connection.query(
        "SELECT * FROM pedidos WHERE id_pedido = ?",
        [id]
      );
      return result[0];
    } catch (error) {
      throw new Error("Error al obtener el pedido por id: " + error.message);
    }
  }

  // Crear pedido
  async createPedido(id_usuario, id_direccion, total, estado) {
    try {
      const [result] = await connection.query(
        "INSERT INTO pedidos (id_usuario, id_direccion, total, estado) VALUES (?, ?, ?, ?)",
        [id_usuario, id_direccion, total, estado || "pendiente"]
      );
      return result.insertId;
    } catch (error) {
      throw new Error("Error al crear el pedido: " + error.message);
    }
  }

  // Actualizar pedido
  async updatePedido(id, estado) {
    try {
      const [result] = await connection.query(
        "UPDATE pedidos SET estado = ? WHERE id_pedido = ?",
        [estado, id]
      );
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error al actualizar el pedido: " + error.message);
    }
  }

  // Eliminar pedido
  async deletePedido(id) {
    try {
      const [result] = await connection.query(
        "DELETE FROM pedidos WHERE id_pedido = ?",
        [id]
      );
      return result.affectedRows;
    } catch (error) {
      throw new Error("Error al eliminar el pedido: " + error.message);
    }
  }
}

export default new PedidosModel();
