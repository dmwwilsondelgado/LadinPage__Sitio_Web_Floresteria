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
        } catch (error) {
            throw new Error('Error al obtener el pedido por id: ' + error.message);
        }
    }
}