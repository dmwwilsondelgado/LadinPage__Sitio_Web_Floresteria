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
    async putCategorias(id, nombre, descripcion) {
        try {
            const [result] = await connection.query(
            "UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_categoria = ?",
            [nombre, descripcion, id]
            );
            if (result.affectedRows === 0) {
            throw new Error("Categoria no encontrada");
            }

            return true;
        } catch (error) {
            throw new Error("Error al actualizar categoria: " + error.message);
        }
    }
    async deleteCategorias(id){
        try {
            const [result] = await connection.query
            ("delete from categorias where id_categoria = ?",
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
