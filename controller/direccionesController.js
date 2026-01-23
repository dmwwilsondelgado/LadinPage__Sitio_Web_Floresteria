import direccionesModel from "../models/direccionesModel.js";

class direccionesController {
    static async getDireccionesByUsuario(req, res) {
        try {
            const {id_usuario } = req.params;
            const direcciones = await direccionesModel.getDireccionesByUsuario(id_usuario);
            res.json(direcciones);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}
export default direccionesController;