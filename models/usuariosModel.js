//imprtamos la conenction al modelo
import conection from "../utils/db.js";

// creamos una clase que sea usable para crear el usuario
class Usuarios{
     /**
   * Metodo para obtener los registros de la base de datos
   * @returns  {Array} listado de los usuarios en un arreglo
   */
  async getAll() {
    try {
        const[rows] = await conection.query("Select * from usuarios")
        return rows;
    } catch (error) {
        throw new Error("Error: al obtener los usuarios");
    }
  }
  async create(nombre,apellido,telefono,documento,usuario,contraseña,id_ciudad,id_genero){
    try {
        const[rows]= await conection.query("....")
      }
      catch (error) {
        
    }
  }
}
