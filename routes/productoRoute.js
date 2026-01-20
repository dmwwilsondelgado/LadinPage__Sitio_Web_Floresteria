import { Router } from "express";
import ProductosController from "../controller/productosController.js";



const router = Router();
router.get("/", ProductosController.getAll);
router.post("/", ProductosController.create);
router.put("/:id", ProductosController.update);
router.delete("/:id", ProductosController.delete);  
export default router;