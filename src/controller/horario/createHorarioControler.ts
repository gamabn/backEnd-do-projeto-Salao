 import {Request,Response} from 'express'
import {CreateHoursService } from '../../service/horario/createHoursService';
 
class createHorarioControler{
    async handler(req:Request, res:Response){

     //let horarios = new Date().getHours()

    const {servicoId,horarios, disponivel,dataAgend,userId} = req.body; 
     //let horarios = number
    
        const createBarba = new CreateHoursService();

         const horario = await  createBarba.execute({
            servicoId,
            horarios,
            disponivel,
            dataAgend,
            userId,
           
        })

         return res.json(horario);

    }
}
export {createHorarioControler}