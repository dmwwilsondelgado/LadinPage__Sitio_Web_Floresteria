import connection from "../utils/db.js";

class TipoProductoModel {

  async getAll() {
    const [rows] = await connection.query(
      "SELECT * FROM tipo_producto WHERE estado = 1"
    );
    return rows;
  }

  async create(id_categoria, nombre, descripcion) {
    const [result] = await connection.query(
      "INSERT INTO tipo_producto (id_categoria, nombre, descripcion) VALUES (?, ?, ?)",
      [id_categoria, nombre, descripcion]
    );
    return result.insertId;
  }

  async update(id, id_categoria, nombre, descripcion) {
    const [result] = await connection.query(
      "UPDATE tipo_producto SET id_categoria=?, nombre=?, descripcion=? WHERE id_tipo=?",
      [id_categoria, nombre, descripcion, id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Tipo de producto no encontrado");
    }
    return true;
  }

  async delete(id) {
    const [result] = await connection.query(
      "UPDATE tipo_producto SET estado = 0 WHERE id_tipo=?",
      [id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Tipo de producto no encontrado");
    }
    return true;
  }
}

export default new TipoProductoModel();
