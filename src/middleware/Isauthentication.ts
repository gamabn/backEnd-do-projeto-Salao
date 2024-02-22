import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

interface Payload{
    sub:string;
}

export function Isauthentication(req:Request, res:Response, next:NextFunction){
   
    const authToken = req.headers.authorization;

   if(!authToken){
     return res.status(401).end()
   }
   const [, token] = authToken.split(" ")
  
   try{
    //validar esse token
    const { sub} = verify(
        token,
        process.env.JWT_SECRET
    )as Payload;
  //Recuperar o id do token ecolocar dentro de uma variavel user_id dentro do req
    req.user_id = sub

    return next()
    //console.log(sub)
   }catch(err){
    return res.status(401).end();

   }
}

