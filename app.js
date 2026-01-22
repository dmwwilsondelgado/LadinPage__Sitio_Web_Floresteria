import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import open from "open";

// importamos el crud
import usuariosRoutes from "./routes/usuariosRoute.js";
import authRoutes from "./routes/authRoute.js";
import categoriasRoutes from "./routes/categoriasRoute.js";
import tipoProductoRoute from "./routes/tipoProductoRoute.js";
import productoRoute from "./routes/productoRoute.js";
import imagenesProductoRoute from "./routes/imagenesProductosRoute.js";
import carritoRoutes from "./routes/carritoRoute.js";

// inicializamos express
const app = express();
const PORT = process.env.PORT || 3000; // definimos el puerto

// body parser para json
app.use(bodyParser.json());

// carpeta pública para correr archivos estáticos
app.use(express.static("public"));

// “Todo lo que esté en la carpeta public/uploads puede ser accedido desde la URL /uploads”.
app.use("/uploads", express.static("public/uploads"));

// para poder recibir datos en formato urlencoded desde postman o formularios
app.use(express.urlencoded({ extended: true }));

// inicializamos el app con su respectivo crud
app.use("/usuarios", usuariosRoutes);
app.use("/auth", authRoutes);
app.use("/categorias", categoriasRoutes);
app.use("/tiposdeproducto", tipoProductoRoute);
app.use("/productos", productoRoute);
app.use("/imagenesproducto", imagenesProductoRoute);
app.use("/api/carrito", carritoRoutes);

// para poder usar __dirname en modulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ruta raíz → frontend
//app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "public/html/index.html"));
//});

// iniciar el servidor y abrir automáticamente el navegador
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  //  open(`http://localhost:${PORT}/html/index.html`);
});
