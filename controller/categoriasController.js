import categoriasModel from "../models/categoriasModel.js";

class categoriasController{
    static async getAllCategorias(req,res){
        try {
            const categoria = await categoriasModel.getAllCategorias();
            res.status(200).json(categoria);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    static async createCategorias (req,res){
        try {
            const {nombre,descripcion} = req.body;
            if (!nombre) {
                res.status(400).json({error:"El nombre es obligatorio"});
            }
            const id = await categoriasModel.postCategorias(nombre,descripcion);
            res.status(201).json({message:"Categoria creada con exito",id});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    
}
