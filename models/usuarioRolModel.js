import conection from "../utils/db";
class usuarioRolModel {
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
