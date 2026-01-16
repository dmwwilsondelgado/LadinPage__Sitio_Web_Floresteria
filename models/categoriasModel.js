import connection from "../utils/db.js";

class catgoriaModel{
    async getAllCategorias(){
        try {
            const[result]= await connection.query("select * from categorias");
            return result;
        } catch (error) {
            throw new Error("Error al obtener las categorias: " + error.message);
        }
    }
    async postCategorias(nombre,descripcion){
        try {
            const[result]= await connection.query("insert into categorias(nombre,descripcion)values(?,?)", 
                [nombre,descripcion]
            ); 
            result.insertId;
        } catch (error) {
            throw new Error("Error al insertar la categoria: " + error.message);
        }
    }
    async putCategorias(id,nombre,descripcion){
        try {
            const[result]= await connection.query("update categorias  set nombre = ? descripcion = ? where id = ?",
                [nombre,descripcion,id]
            );
            if (result.affectedRows == 0) {
                throw new Error("Categoria no encontrada"); 
            }
        } catch (error) {
            throw new Error(message.error);
        }
    }
    async deleteCategorias(id){
        try {
            const [result] = await connection.query
            ("update categorias set estado = 0 where id = ?",
                [id]
            );
            if (result.affectedRows == 0) {
                throw new Error("Categoria no encontrada");
            }
        } catch(error){
            throw new Error(error.message,"no se pudo eliminar la categoria" );       
        }
    }
}

export default new catgoriaModel();
