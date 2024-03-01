import prismaClient from "../../prisma";


 class consultService{
     async execute(){
  // let valores = [];
   //const agendas = await prismaClient.agendamento.findMany({
  

  // }) 
  // console.log(agendas) 
  //  valores.push(agendas)

  const list = await prismaClient.horario.findMany({
     select:{
       horarios: true
        }
     
    }
  )
  
   
 //  console.log(list)
 
   
   return list;
  }  
    }
  export {consultService}
