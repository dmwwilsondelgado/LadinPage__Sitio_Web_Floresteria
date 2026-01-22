import imagenesProductoModel from "../models/imagenesProductoModel.js";

class ImagenesProductoController {
  static async getALLimages(req, res) {
    try {
      const data = await imagenesProductoModel.getALLimages();
      res.json(data);    
    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { id_producto, url_imagen } = req.body;

      if (!id_producto || !url_imagen) {
        return res.status(400).json({
          error: "id_producto y url_imagen son obligatorios"
        });
      }

      const id = await imagenesProductoModel.create(
        id_producto,
        url_imagen
      );

      res.status(201).json({
        message: "Imagen agregada al producto",
        id
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getByProducto(req, res) {
    try {
      const { id_producto } = req.params;
      const data = await imagenesProductoModel.getByProducto(id_producto);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await imagenesProductoModel.delete(id);
      res.json({ message: "Imagen eliminada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ImagenesProductoController;
