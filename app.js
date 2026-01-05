import express from "express";
import bodyParser from "body-parser";

// rutas

//creamos inicio 
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// rutas
// app.use("/ciudades", ciudadesRoutes);
// app.use("/generos", generoRoutes);
// app.use("/lenguajes", lenguajesRoutes);
// app.use("/usuarios", usuariosRoutes);

// servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/ Creando Nuevo Mundo ");
});
