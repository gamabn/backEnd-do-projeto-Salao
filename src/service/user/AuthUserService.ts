import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest{
email: string,
password: string

}

 class AuthUserService{
   async execute({email,password}:AuthRequest){
  //verificar se o email existe.
  const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
  })

  if(!user){
    throw new Error('Usuario ou senha incorreto')
  }
  //verificar se a senha esta correta
    const passswordMatch = await compare(password, user.password)

    if(!passswordMatch){
      throw new Error('Usuario ou senha incorreto')
    }
    // Se deu tudo certo vamos gerar um token para o usuario 

    const token = sign(
      {
        name: user.email,
        email: user.email,

      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return { 
      id:user.id,
      name: user.name,
      email: user.email,
      token: token
    }

   }
 }
 export { AuthUserService}