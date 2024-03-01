import {Request,Response} from 'express'
import { listUserService } from '../../service/user/lisrUserServico'

class listUserControler{
    async handler(req:Request, res:Response){
     // const {agendId } = req.body

        const listServ = new listUserService() 

       // const agendamento = await createAgendamento.execute({agendId})
       const list = await listServ.execute()
         return res.json(list)
    }
}
export {listUserControler}