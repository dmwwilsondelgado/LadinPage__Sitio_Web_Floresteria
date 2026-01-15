import connection from "../utils/db.js";

class UsuarioRolModel {
  async asignarRol(idUsuario, idRol) {
    try {
      await connection.query(
        "INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (?, ?)",
        [idUsuario, idRol]
      );
    } catch (error) {
      console.error(error);
      throw new Error("Error al asignar el rol al usuario");
    }
  }
}

export default new UsuarioRolModel();
