import express, { Router } from "express";
import usuariosController from"../controller/usuariosController.js"

const router = Router();
router.post("/",usuariosController.create);

export default router;