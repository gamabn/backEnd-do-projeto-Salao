import { Request,Response } from "express";
import {  DetailUserService } from "../../service/user/DetailUserService";

 class DetailUserController{
    async handler(req:Request, res:Response){

        const user_id = req.user_id;
        console.log('Id do User',user_id)

        const DetailUser = new DetailUserService();

        const user = await DetailUser.execute(user_id);

        return res.json(user)
        
    }
 }
 export { DetailUserController}