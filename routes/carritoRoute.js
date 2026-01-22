import { Router } from "express";
import CarritoController from "../controllers/carritoController.js";

const router = Router();

router.post("/agregar", CarritoController.agregar);
router.get("/:id_usuario", CarritoController.ver);

export default router;
