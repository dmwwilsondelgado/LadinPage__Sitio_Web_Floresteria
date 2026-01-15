import conection from "../utils/db";
class usuarioRolModel {
    /**
    * Metodo para obtener los registros de la base de datos
    * @returns  {Array} listado de los usuarios en un arreglo
    */
    async asignarRol(idUsuario,idRol)  {
        try {
            await conection.execute("insert into usuario_rol(id_usuario,id_rol)values(?,?);"
                [idUsuario,idRol]
            )
        } catch (error) {
            throw new error("Error al Asignar el Usuario");
        }
    }
}

export default usuarioRolModel();
