import { Router } from "express";
import direccionesController from "../controller/direccionesController.js";
const router = Router();


router.get("/:id_usuario",direccionesController.getDireccionesByUsuario);