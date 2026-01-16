import conecction from "../utils/db.js";

class authModel {
    async findByEmail (email){
        try {
            const[rows] = await conecction.query("select * from usuarios where email = ?",
                [email]
            );
            return rows[0]
        } catch (error) {
            throw new Error ("Error al buscar usuario por email: " + error.message);
        }
    }
}

export default new authModel();