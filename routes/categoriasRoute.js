import { Router } from "express";
import categoriasController from "../controller/categoriasController.js";

const router = Router();

router.get("/", categoriasController.getAllCategorias);
router.post("/", categoriasController.createCategoria);
router.put("/:id", categoriasController.updateCategoria);
router.delete("/:id", categoriasController.deleteCategoria);

export default router;
