import { Router } from "express";
import UsuariosController from "../controller/usuariosController.js";

const router = Router();

router.get("/", UsuariosController.getUser);
router.post("/", UsuariosController.createUser);
router.put("/:id_usuario", UsuariosController.updateUser);
router.patch("/:id_usuario", UsuariosController.patchUser);
router.delete("/:id_usuario",UsuariosController.deleteUser);

export default router;
