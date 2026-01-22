import express from "express";
import bodyParser from "body-parser";
//importamos el crud
import usuariosRoutes from "./routes/usuariosRoute.js"
import authRoutes from "./routes/authRoute.js";
import categoriasRoutes from "./routes/categoriasRoute.js";
import tipoProductoRoute from "./routes/tipoProductoRoute.js";
import productoRoute from "./routes/productoRoute.js";
import imagenesProductoRoute from "./routes/imagenesProductosRoute.js";1

//creamos inicio 
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//inicializamos el app
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
