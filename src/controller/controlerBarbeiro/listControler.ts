import {Request,Response} from 'express'
import { ListService } from '../../service/serviçoBarbeiro/listBarberService'

class listControler{
    async handler(req:Request, res:Response){
     // const {agendId } = req.body

        const listServ = new ListService() 

       // const agendamento = await createAgendamento.execute({agendId})
       const list = await listServ.execute()
         return res.json(list)
    }
}
export {listControler}