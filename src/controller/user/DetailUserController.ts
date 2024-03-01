import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";

class DetailUserController {
    async handler(req: Request, res: Response) {
        try {
            // Verifique se está recebendo o user_id corretamente
            const user_id = req.user_id;
            console.log('Id do User', user_id);

            // Crie uma instância do serviço
            const detailUser = new DetailUserService();

            // Chame a função execute para obter os dados do usuário
            const user = await detailUser.execute(user_id);

            // Verifique se user está definido
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Retorne os dados do usuário
            return res.json(user);
        } catch (error) {
            // Captura de erros
            console.error('Error in DetailUserController:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export { DetailUserController };