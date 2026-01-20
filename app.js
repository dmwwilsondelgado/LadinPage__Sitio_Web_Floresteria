import express from "express";
import bodyParser from "body-parser";
import usuariosRoutes from "./routes/usuariosRoute.js"
import authRoutes from "./routes/authRoute.js";
import categoriasRoutes from "./routes/categoriasRoute.js";
import tipoProductoRoute from "./routes/tipoProductoRoute.js";
import productoRoute from "./routes/productoRoute.js";

//creamos inicio 
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// rutas
app.use("/usuarios", usuariosRoutes);
app.use("/auth",authRoutes);
app.use("/categorias",categoriasRoutes);
app.use("/tiposdeproducto", tipoProductoRoute);
app.use("/productos", productoRoute);
// servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/ Creando Nuevo Mundo ");
});
