import {Request, Response} from 'express'
import { CreateUserService } from '../../service/user/CreateUserService'

 class CreateUserController{
  async handler(req:Request, res:Response){
//  console.log(req.body)
const { name, email, password} = req.body

const CreateUser =  new CreateUserService();

 const user = await CreateUser.execute(
    {
    name,
    email,
    password 
 })

    return res.json(user)
    
  }
 }
 export {CreateUserController}