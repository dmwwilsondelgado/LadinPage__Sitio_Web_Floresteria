import categoriasModel from "../models/categoriasModel.js";

class CategoriasController {

  static async getAllCategorias(req, res) {
    try {
      const categoria = await categoriasModel.getAllCategorias();
      res.status(200).json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createCategoria(req, res) {
    try {
      const { nombre, descripcion } = req.body;

      if (!nombre) {
        return res.status(400).json({ error: "El nombre es obligatorio" });
      }

      const id = await categoriasModel.postCategorias(nombre, descripcion);
      res.status(201).json({ message: "Categoria creada con éxito", id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateCategoria(req, res) {
    try {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;

      await categoriasModel.putCategorias(id, nombre, descripcion);
      res.status(200).json({ message: "Categoria actualizada con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteCategoria(req, res) {
    try {
      const { id } = req.params;
      await categoriasModel.deleteCategorias(id);
      res.status(200).json({ message: "Categoria eliminada con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CategoriasController;


// class categoriasController{
//     static async getAllCategorias(req,res){
//         try {
//             const categoria = await categoriasModel.getAllCategorias();
//             res.status(200).json(categoria);
//         } catch (error) {
//             res.status(500).json({error: error.message});
//         }
//     }
//     static async createCategorias (req,res){
//         try {
//             const {nombre,descripcion} = req.body;
//             if (!nombre) {
//                 res.status(400).json({error:"El nombre es obligatorio"});
//             }
//             const id = await categoriasModel.postCategorias(nombre,descripcion);
//             res.status(201).json({message:"Categoria creada con exito",id});
//         } catch (error) {
//             res.status(500).json({error: error.message});
//         }
//     }
//     static async updateCategorias (req,res){
//         try {
//             const {id}= req.params;
//             const {nombre,descripcion}=req.body
//             await categoriasModel.putCategorias(id,nombre,descripcion);
//             res.status(200).json({message:"Categoria actualizada con exito"});  
//         } catch (error) {
//             res.status(500).json({error: error.message});
//         }
//     }
//     static async deleteCategorias(req,res){
//         try {
//             const{id}=req.params;
//             await categoriasModel.deleteCategorias(id);
//             res.status(200).json({message: "Categoria eliminada con exito"});
//         } catch (error) {
//             res.status(500).json({error:error.message});
//         }
//     }
// }
// export default categoriasController;
