
import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

const prisma = new PrismaClient();

interface ServiRequest {
  servicoId: string;
  horarios: number;
  disponivel: boolean;
  userId: string;
  dataAgend:string
 
}

class CreateHoursService {
  async execute({ servicoId, horarios, disponivel,userId,dataAgend }: ServiRequest) {
    try {
      if(!horarios){
        throw new Error("Digite um Horario");
     }

     if(horarios > 24 ){
      throw new Error("horario invalido");
     }

    // const userAlreadyExists = await prismaClient.horario.findFirst({
       //where:{
       //  horarios: horarios.toString(),
        // disponivel: false
      // }
    // })
      //if(userAlreadyExists){
      // throw new Error("User alread exists")
     // }
      const horario = await prisma.horario.create({
        data: {
    
          horarios: horarios.toString(),
         // horarios: horarios,
          servicoId: servicoId,
          disponivel,
          dataAgend: dataAgend,
          userId: userId,
         
          
        },
      });

      return horario;
    } catch (error) {
      console.error('Erro ao criar horário:', error);
      throw new Error('Erro ao criar horário');
    }
  }
}

export { CreateHoursService };