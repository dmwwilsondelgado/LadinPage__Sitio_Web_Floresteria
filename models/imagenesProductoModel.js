import connection from `../config/db.js`;

class ImagenesProductoModel{
    async create(id_producto,url_imagen){
        try {
            const[result] = await connection.query(
                `INSERT INTO imagenes_producto (id_producto, url_imagen) VALUES (?, ?)`,
                [id_producto, url_imagen]
            );
            return result.insertId;
        } catch (error) {
             throw new Error("Error al insertar la imagen del producto:", error);
        }
    }
}