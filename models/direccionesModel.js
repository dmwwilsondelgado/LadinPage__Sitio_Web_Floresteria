import connection from '../db.js';

class direccionesModel {
    // Obtener direcciones de un usuario
    async getDireccionesByUsuario(id_usuario) {
        try {
          const [result] = await connection.query(
            "SELECT * FROM direcciones WHERE id_usuario = ?",
            [id_usuario]
          );
          return result;
        } catch (error) {
          throw new Error("Error al obtener direcciones: " + error.message);
        }
    }
}
export default new direccionesModel();