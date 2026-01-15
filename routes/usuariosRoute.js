import { Router } from "express";
import UsuariosController from "../controller/usuariosController.js";

const router = Router();

router.get("/", UsuariosController.getUser);
router.post("/", UsuariosController.createUser);
router.put("/:id_usuario", UsuariosController.updateUser);

export default router;
