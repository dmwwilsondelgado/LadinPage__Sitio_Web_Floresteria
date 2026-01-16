import express from "express";
import bodyParser from "body-parser";
import usuariosRoutes from "./routes/usuariosRoute.js"


//creamos inicio 
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/usuarios", usuariosRoutes);
// servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/ Creando Nuevo Mundo ");
});
