//imprtamos la conenction al modelo
import conection from "../utils/db.js";

// creamos una clase que sea usable para crear el usuario
class Usuarios{
     /**
   * Metodo para obtener los registros de la base de datos
   * @returns  {Array} listado de los usuarios en un arreglo
   */
  async getAllUsuarios() {
    try {
        const[rows] = await conection.query("Select * from usuarios")
        return rows;
    } catch (error) {
        throw new Error("Error: al obtener los usuarios");
    }
  }
  async createUsuarios(nombre,email,password,telefono){
    try {
        const[result]= await connection.query("insert into usuarios(nombre,email,password,telefono)values (?,?,?,?);"
          [nombre,email,password,telefono]
        )
        return result.insertId;
      }
      catch (error) {
        throw new Error("Error: al Crear el Usuario");
    }
  }
}
