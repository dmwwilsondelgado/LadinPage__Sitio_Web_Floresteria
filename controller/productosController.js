import ProductosModel from "../models/productosModel.js";

class ProductosController {

  static async getAll(req, res) {
    try {
      const data = await ProductosModel.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const {
        nombre,
        descripcion,
        precio,
        stock,
        id_categoria,
        id_tipo_producto
      } = req.body;

      if (!nombre || !precio || !stock || !id_categoria || !id_tipo_producto) {
        return res.status(400).json({
          error: "Todos los campos obligatorios deben enviarse"
        });
      }

      const id = await ProductosModel.create(
        nombre,
        descripcion,
        precio,
        stock,
        id_categoria,
        id_tipo_producto
      );

      res.status(201).json({
        message: "Producto creado correctamente",
        id
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const {
        nombre,
        descripcion,
        precio,
        stock,
        id_categoria,
        id_tipo_producto
      } = req.body;

      await ProductosModel.update(
        id,
        nombre,
        descripcion,
        precio,
        stock,
        id_categoria,
        id_tipo_producto
      );

      res.json({ message: "Producto actualizado correctamente" });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await ProductosModel.delete(id);
      res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ProductosController;
