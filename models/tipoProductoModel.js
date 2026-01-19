import connection from "../utils/db.js";

class TipoProductoModel {

  async getAll() {
    const [rows] = await connection.query(
      "SELECT * FROM tipo_producto "
    );
    return rows;
  }

  async create(nombre, descripcion) {
    const [result] = await connection.query(
      "INSERT INTO tipo_producto ( nombre, descripcion) VALUES (?, ?)",
      [nombre, descripcion]
    );
    return result.insertId;
  }

  async update(id, nombre, descripcion) {
    const [result] = await connection.query(
      "UPDATE tipo_producto SET  nombre=?, descripcion=? WHERE id_tipo_producto=?",
      [nombre, descripcion, id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Tipo de producto no encontrado");
    }
    return true;
  }

  async delete(id) {
    const [result] = await connection.query(
      "delete tipo_producto WHERE id_tipo_producto = ? ",
      [id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Tipo de producto no encontrado");
    }
    return true;
  }
}

export default new TipoProductoModel();
