import connection from "../utils/db.js";

class ProductosModel {

  async getAll() {
    const [rows] = await connection.query(`
      SELECT 
        p.id_producto,
        p.nombre,
        p.descripcion,
        p.precio,
        p.stock,
        p.estado,
        c.nombre AS categoria,
        t.nombre AS tipo_producto
      FROM productos p
      INNER JOIN categorias c ON p.id_categoria = c.id_categoria
      INNER JOIN tipo_producto t ON p.id_tipo_producto = t.id_tipo_producto
      WHERE p.estado = 1
    `);
    return rows;
  }

  async create(nombre, descripcion, precio, stock, estado, id_categoria, id_tipo_producto) {
    try {
    const [result] = await connection.query(
      `INSERT INTO productos 
      (nombre, descripcion, precio, stock, estado, id_categoria, id_tipo_producto) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nombre, descripcion, precio, stock, estado, id_categoria, id_tipo_producto]
    );
    return result.insertId;
    } catch (error) {
      throw error;
    }
  }


  async update(id, nombre, descripcion, precio, stock, estado, id_categoria, id_tipo_producto) {
    const [result] = await connection.query(
      `UPDATE productos 
       SET nombre=?, descripcion=?, precio=?, stock=?, estado=?, id_categoria=?, id_tipo_producto=?
       WHERE id_producto=?`,
      [nombre, descripcion, precio, stock, estado, id_categoria, id_tipo_producto, id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Producto no encontrado");
    }
    return true;
  }

  async delete(id) {
    const [result] = await connection.query(
      `UPDATE productos SET estado = 0 WHERE id_producto=?`,
      [id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Producto no encontrado");
    }
    return true;
  }
}

export default new ProductosModel();
