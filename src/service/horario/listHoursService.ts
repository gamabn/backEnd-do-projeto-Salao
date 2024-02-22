import prismaClient from "../../prisma";


 class listHoursService{
     async execute(){
  // let valores = [];
   //const agendas = await prismaClient.agendamento.findMany({
  

  // }) 
  // console.log(agendas) 
  //  valores.push(agendas)

    const list = await prismaClient.horario.findMany({
   
    select:{  
     userId: true,
    servicoId: true,
    horarios: true,
    dataAgend:true,
    disponivel:true,
    created_at:true
    }
  

    })  
  
   
   console.log(list)
 
   
   return list;
  }  
    }
  export {listHoursService}
