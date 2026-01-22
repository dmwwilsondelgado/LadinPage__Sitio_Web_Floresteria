import connection from "../utils/db.js";

class ImagenesProductoModel {

  async create(id_producto, url_imagen) {
    const [result] = await connection.query(
      "INSERT INTO imagenes_producto (id_producto, url_imagen) VALUES (?, ?)",
      [id_producto, url_imagen]
    );
    return result.insertId;
  }

  async getByProducto(id_producto) {
    const [rows] = await connection.query(
      "SELECT * FROM imagenes_producto WHERE id_producto = ? AND estado = 1",
      [id_producto]
    );
    return rows;
  }

  async delete(id_imagen) {
    const [result] = await connection.query(
      "UPDATE imagenes_producto SET estado = 0 WHERE id_imagen = ?",
      [id_imagen]
    );

    if (result.affectedRows === 0) {
      throw new Error("Imagen no encontrada");
    }
    return true;
  }
}

export default new ImagenesProductoModel();
