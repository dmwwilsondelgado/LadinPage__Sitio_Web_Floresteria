import express from "express";
import bodyParser from "body-parser";
import usuariosRoutes from "./routes/usuariosRoute.js"
import authRoutes from "./routes/authRoute.js";
import categoriasRoutes from "./routes/categoriasRoute.js";

//creamos inicio 
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/usuarios", usuariosRoutes);
app.use("/auth",authRoutes);
app.use("/categorias",categoriasRoutes);
// servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/ Creando Nuevo Mundo ");
});
