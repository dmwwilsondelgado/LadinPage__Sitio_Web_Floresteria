import connection from "../utils/db.js";

class ImagenesProductoModel {
  async getALLimages() {
    try {
      const [result] = await connection.query(`select * from  imagenes_producto`);
      return result;
    } catch (error) {
      throw new Error("Error al obtener las imágenes de productos: " + error.message);
    }
  }

  async create(id_producto, url_imagen) {
    try {
      const [result] = await connection.query(
      "INSERT INTO imagenes_producto (id_producto, url_imagen) VALUES (?, ?)",
      [id_producto, url_imagen]
      );
      return result.insertId; 
    } catch (error) {
      throw new Error("Error al crear la imagen del producto: " + error.message); 
    }
  }

  async getByProducto(id_producto) {
    try {
      const [rows] = await connection.query(
      "SELECT * FROM imagenes_producto WHERE id_producto = ?",
      [id_producto]
      );
      return rows; 
    } catch (error) {
      throw new Error("Error al obtener las imágenes del producto: " + error.message);
    }
  }

  async delete(id_imagen) {
    try {
      const [result] = await connection.query(
      "delete  from imagenes_producto where id_imagen = ?",
      [id_imagen]
      );

      if (result.affectedRows === 0) {
        throw new Error("Imagen no encontrada");
      }
      return true;
    } catch (error) {
      throw new Error("Error al eliminar la imagen del producto: " + error.message);
    }
  }
}

export default new ImagenesProductoModel();
