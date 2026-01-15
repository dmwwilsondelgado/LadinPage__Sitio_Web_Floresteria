//imprtamos la conenction al modelo
import connection from "../utils/db.js";

// creamos una clase que sea usable para crear el usuario
class Usuarios{
     /**
   * Metodo para obtener los registros de la base de datos
   * @returns  {Array} listado de los usuarios en un arreglo
   */
  async getAllUsuarios() {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios");
      return rows;
    } catch (error) {
       throw new Error("Error: al obtener los usuarios");
    }
  }
  async postUsuarios(nombre,email,password,telefono){
    try {
        const[result]= await connection.query("INSERT INTO usuarios(nombre,email,password,telefono)VALUES (?,?,?,?)",
          [nombre,email,password,telefono]
        )
        return result.insertId;
      }
      catch (error) {
        throw new Error(error.message);
    }
  }
  async putUsuarios(idUsuario,nombre,email,telefono){
    try {
      const[result]= await connection.query("UPDATE usuarios SET nombre=?, email=?, telefono=? WHERE id_usuario=?",
        [nombre,email,telefono,idUsuario]
      );
      if (result.affectedRows == 0) {
        throw new Error("No se encontró el usuario a actualizar");
      }
      return true;
    } catch (error) {
      throw new Error(error.message,"Error al actualizar el usuario");
    }
   }
}

export default new Usuarios();