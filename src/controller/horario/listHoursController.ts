
 import {Request,Response} from 'express'
import { listHoursService } from '../../service/horario/listHoursService'


class listHoursController{
    async handler(req:Request, res:Response){
     // const {agendId } = req.body

        const listHours = new listHoursService() 

       // const agendamento = await createAgendamento.execute({agendId})
       const list = await listHours.execute()
         return res.json(list)
    }
}
export {listHoursController}