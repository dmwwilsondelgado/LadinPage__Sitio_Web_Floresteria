import tipoProductoModel from "../models/tipoProductoModel.js";

class TipoProductoController {

  static async getAll(req, res) {
    try {
      const data = await tipoProductoModel.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { nombre, descripcion } = req.body;

      if ( !descripcion|| !nombre) {
        return res.status(400).json({
          error: "id_categoria y nombre son obligatorios"
        });
      }

      const id = await tipoProductoModel.create(
        nombre,
        descripcion
      );

      res.status(201).json({
        message: "Tipo de producto creado",
        id
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { id_categoria, nombre, descripcion } = req.body;

      await tipoProductoModel.update(
        id,
        id_categoria,
        nombre,
        descripcion
      );

      res.json({ message: "Tipo de producto actualizado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await tipoProductoModel.delete(id);
      res.json({ message: "Tipo de producto eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default TipoProductoController;
