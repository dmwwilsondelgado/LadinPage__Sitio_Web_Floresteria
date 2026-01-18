import { Router } from "express";
import TipoProductoController from "../controller/tipoProductoController.js";

const router = Router();

router.get("/", TipoProductoController.getAll);
router.post("/", TipoProductoController.create);
router.put("/:id", TipoProductoController.update);
router.delete("/:id", TipoProductoController.delete);

export default router;
