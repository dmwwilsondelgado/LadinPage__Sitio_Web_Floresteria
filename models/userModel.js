//imprtamos la conenction al modelo
import conection from "../utils/db.js";

// creamos una funcion que sea usable para crear el usuario
export const createUser = async(user)=>{
    const{nombre,email,password,telefono} = user;
    const[result] = await conection.execute(
        `INSERT INTO usuarios (nombre, email, password, telefono)
        VALUES (?, ?, ?, ?)`,
        [nombre, email, password, telefono]
    );
    return result.insertId;
}