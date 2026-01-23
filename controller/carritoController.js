import carritoModel from "../models/carritoModel.js";
import carritoDetalleModel from "../models/carritoDetalleModel.js";
import productosModel from "../models/productosModel.js";

class CarritoController {
  // ➕ Agregar producto al carrito
  static async agregar(req, res) {
        try {
            const { id_usuario, id_producto, cantidad } = req.body;

            if (!id_usuario || !id_producto || !cantidad) {
                return res.status(400).json({ error: "Datos incompletos" });
            }

            // 1️⃣ Buscar carrito activo
            let carrito = await carritoModel.getActivo(id_usuario);

            if (!carrito) {
                const idCarrito = await carritoModel.crear(id_usuario);
                carrito = { id_carrito: idCarrito };
            }

            // 2️⃣ Obtener producto
            const producto = await productosModel.getById(id_producto);
            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }

            // 3️⃣ Ver si ya está en el carrito
            const detalle = await carritoDetalleModel.buscarProducto(
                carrito.id_carrito,
                id_producto
            );

            if (detalle) {
                await carritoDetalleModel.actualizarCantidad(
                detalle.id_detalle,
                detalle.cantidad + cantidad
                );
            } else {
                await carritoDetalleModel.agregar(
                carrito.id_carrito,
                id_producto,
                cantidad,
                producto.precio
                );
            }
            res.json({ message: "Producto agregado al carrito" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
  // Ver carrito del usuario
    static async ver(req, res) {
        try {
            const { id_usuario } = req.params;

            const carrito = await carritoModel.getActivo(id_usuario);
            if (!carrito) return res.json([]);

            const detalle = await carritoDetalleModel.obtenerDetalle(
                carrito.id_carrito
            );

            res.json(detalle);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default CarritoController;
