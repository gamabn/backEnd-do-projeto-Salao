import { Request,Response } from "express";
import {AuthUserService} from '../../service/user/AuthUserService'
 
class AuthUserController{
    async handler(req:Request, res:Response){

     const {email, password} = req.body

      const AuthUser = new AuthUserService();
      const auth = await AuthUser.execute({
        email,
        password
      }) 

      return res.json(auth)
    }
}
export {AuthUserController}