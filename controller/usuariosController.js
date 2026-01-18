import bcrypt from "bcryptjs";
import UsuarioModel from "../models/usuariosModel.js";
import UsuarioRolModel from "../models/usuarioRolModel.js";

class UsuariosController {
  static async getUser(req, res) {
    try {
      const usuarios = await UsuarioModel.getAllUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async createUser(req, res) {
    try {
      const { nombre, email, password, telefono } = req.body;

      // hash del password
      const passwordHash = await bcrypt.hash(password, 10);

      // crear usuario
      const idUsuario = await UsuarioModel.postUsuarios(
        nombre,
        email,
        passwordHash,
        telefono
      );

      // asignar rol CLIENTE (2)
      await UsuarioRolModel.asignarRol(idUsuario, 2);

      res.status(201).json({
        message: "Usuario creado como CLIENTE correctamente"
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async updateUser (req,res){
    try {
      const { id_usuario } = req.params;
      const {nombre,email,telefono}= req.body;
      await UsuarioModel.putUsuarios(id_usuario,nombre,email,telefono);
      res.status(200).json({message:"Usuario actualizado correctamente"});
    } catch (error) {
      res.status(500).json({error:error.message});
    }
  }
  static async patchUser(req, res) {
    try {
      const { id_usuario } = req.params;
      const campos = req.body;

      await UsuarioModel.patchUsuarios(id_usuario, campos);

      res.status(200).json({
        message: "Usuario actualizado parcialmente"
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async deleteUser(req,res){
    try {
      const { id_usuario } = req.params;
      await UsuarioModel.deleteUsuarios(id_usuario);
      res.status(200).json({
        message: "Usuario desactivado correctamente"
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
export default UsuariosController;
