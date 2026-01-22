import express from "express";
import bodyParser from "body-parser";
//importamos el crud
import usuariosRoutes from "./routes/usuariosRoute.js"
import authRoutes from "./routes/authRoute.js";
import categoriasRoutes from "./routes/categoriasRoute.js";
import tipoProductoRoute from "./routes/tipoProductoRoute.js";
import productoRoute from "./routes/productoRoute.js";
import imagenesProductoRoute from "./routes/imagenesProductosRoute.js";1

//aca inicializamos express
const app = express();
//usamos el body parser para json
app.use(bodyParser.json());
//carpeta publica para correr doom en el navegador arcghivos estaticos
app.use(express.static("public"));
//“Todo lo que esté en la carpeta public/uploads puede ser accedido desde la URL /uploads”.
app.use("/uploads", express.static("public/uploads"));
//para poder recibir datos en formato urlencoded desde postman o formularios
app.use(express.urlencoded({ extended: true }));
//inicializamos el app con su respectivo crud
app.use("/usuarios", usuariosRoutes);
app.use("/auth",authRoutes);
app.use("/categorias",categoriasRoutes);
app.use("/tiposdeproducto", tipoProductoRoute);
app.use("/productos", productoRoute);
app.use("/imagenesproducto", imagenesProductoRoute);
// servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/ Creando Nuevo Mundo ");
});
