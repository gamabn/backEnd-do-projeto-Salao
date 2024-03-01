
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
          disponivel: true,
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



//import { PrismaClient } from "@prisma/client";

//const prisma = new PrismaClient();

//interface ServiRequest {
  //servicoId: string;
  //horarios: number;
 // disponivel: boolean;
 // userId: string;
 // dataAgend: string;
//}

//class CreateHoursService {
 // async execute({ servicoId, horarios, disponivel, userId, dataAgend }: ServiRequest) {
   // try {
     // if (!horarios) {
      //  throw new Error("Digite um Horário");
      //}

      //if (horarios > 24) {
      //  throw new Error("Horário inválido");
     // }

      // Consulta para obter o nome do usuário com base no ID do usuário
      //const usuario = await prisma.user.findUnique({
      //  where: {
       //   id: userId,
       // },
     // });

      //if (!usuario) {
        //throw new Error("Usuário não encontrado");
      //}

      // Consulta para obter o nome do serviço com base no ID do serviço
      //const servico = await prisma.servico.findUnique({
       // where: {
         // id: servicoId,
        //},
     // });

     // if (!servico) {
      //  throw new Error("Serviço não encontrado");
     // }

   //   const horario = await prisma.horario.create({
      //  data: {
        //  horarios: horarios.toString(),
        //  servicoId,
        //  disponivel,
        //  dataAgend,
         // userId,
         // nomeUsuario: usuario.nome, // Inclui o nome do usuário no horário
          //nomeServico: servico.nome, // Inclui o nome do serviço no horário
        //},
     // });

    //  return horario;
   // } catch (error) {
   //   console.error('Erro ao criar horário:', error);
   //   throw new Error('Erro ao criar horário');
   // }
 // }
//}

//export { CreateHoursService };