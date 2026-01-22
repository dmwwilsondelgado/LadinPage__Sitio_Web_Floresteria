import connection from "../utils/db.js";

class CarritoModel {

  async getActivo(id_usuario) {
    try {
        const [rows] = await connection.query(
        "SELECT * FROM carrito WHERE id_usuario=? AND estado='activo'",
        [id_usuario]
        );
        return rows[0];   
    } catch (error) {
        throw new Error("Error al obtener el carrito activo: " + error.message);
    }
  }

  async crear(id_usuario) {
        try {
            const [result] = await connection.query(
            "INSERT INTO carrito (id_usuario) VALUES (?)",
            [id_usuario]
            );
            return result.insertId;
        } catch (error) {
            throw new Error("Error al crear el carrito: " + error.message);   
        }
    }

  async cambiarEstado(id_carrito, estado) {
        try {
            await connection.query(
            "UPDATE carrito SET estado=? WHERE id_carrito=?",
            [estado, id_carrito]
        );
        } catch (error) {
            throw new Error("Error al cambiar el estado del carrito: " + error.message);
        }
    }
}
export default new CarritoModel();