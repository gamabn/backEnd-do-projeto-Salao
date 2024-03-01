import { Request, Response } from 'express';
import  {MudarHoursService} from '../../service/horario/mudartHoursService ';

class mudarHoursController {
    async handler(req: Request, res: Response) {
        try {
            // Extrai o ID da requisição
            const { id } = req.body;
            // Cria uma instância do serviço e chama o método execute com o ID
            const listHours = new MudarHoursService(); // Corrigido o espaço em excesso
            const list = await listHours.execute(id);

            // Retorna o resultado da operação
            return res.json(list);
        } catch (error) {
            console.error("Erro ao alterar horário:", error);
            return res.status(500).json({ message: "Erro ao alterar horário" });
        }
    }
}
export { mudarHoursController };