import bcrypt from "bcryptjs";
import authModel from "../models/authModel.js";

class AuthController {
    static async login(req,res){
        try{
            const {email,password} = req.body;
            //validacion de datos 
            if (!email || !password) {
                return res.status(400).json(
                    {error:"Email y password son Obligatorios"}
                );
            }
            //buscar usuario por email
            const usuario = await authModel.findByEmail(email);
            if(!usuario){
                return res.status(401).json({
                    error:"usuario no encontrado"
                });
            }
            //comparar pasword con bycript
            const passwordOk = await bcrypt.compare(password, usuario.password);
            if (!passwordOk) {
                return res.status(401).json({
                    error:"contraseña incorrecta"
                });
            }
            res.status(200).json({
                message:"login exitoso",
                usuario:{
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email
                }
            });
        }
        catch(error){
            res.status(500).json({error:error.message});
        } 

    }
}

export default AuthController;