import { Router } from "express";
import ImagenesProductoController from "../controller/imagenesProductoController.js";

const router = Router();

router.post("/", ImagenesProductoController.create);
router.get("/",ImagenesProductoController.getALLimages);
router.get("/:id_producto", ImagenesProductoController.getByProducto);
router.delete("/:id", ImagenesProductoController.delete);

export default router;
