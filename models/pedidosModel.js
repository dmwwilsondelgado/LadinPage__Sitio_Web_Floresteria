import connection from '../db.js';

class PedidosModel {
    async getAllPedidos() {
        try {
             const[result] = await connection.query(`select * from pedidos`);
             return result;
        } catch (error) {
            throw new Error('Error al obtener los pedidos: ' + error.message);
        }
    }
    async getByIdPedido(id){
        try {
            const [result] = await connection.query (
                `select * from pedidos where id_pedido = ?`,
                [id]
            )
            return result[0];
        } catch (error) {
            throw new Error('Error al obtener el pedido por id: ' + error.message);
        }
    }
    async createPedido(id_usuario, id_direccion, total,estado,){
        try {
            const [result] = await connection.query( "INSERT INTO pedidos (id_usuario, id_direccion, total, estado) VALUES (?, ?, ?, ?)", 
                [id_usuario, id_direccion, total, estado || "pendiente"] 
            ); 
            return result.insertId;
        } catch (error) {
            throw new Error('Error al crear el pedido: ' + error.message);
        }
    }
}