import {Request,Response} from 'express'
import { createBarbaService } from '../../service/serviçoBarbeiro/createBarbaService';
 
class createBarbaControler{
    async handler(req:Request, res:Response){
    const {nome,descricao, valor} = req.body;
        const createBarba =  new createBarbaService();

         const serviçe = await  createBarba.execute({nome, descricao, valor})

         return res.json(serviçe);

    }
}
export {createBarbaControler}