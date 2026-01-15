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
      const idUsuario = await UsuarioModel.create(
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
}

export default UsuariosController;
