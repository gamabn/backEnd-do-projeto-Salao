import { Request, Response } from 'express'
import { consultService } from '../../service/horario/consultService';

class  consultController{
    async handler(req: Request, res: Response) {
        try {
            const listHours = new consultService();
            const list = await listHours.execute();
            return res.json(list);
        } catch (error) {
            console.error("Erro ao listar horas:", error);
            return res.status(500).json({ message: "Erro ao listar horas" });
       
    }
   }
}
export { consultController };