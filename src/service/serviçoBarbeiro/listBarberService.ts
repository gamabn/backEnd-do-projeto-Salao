import prismaClient from "../../prisma";


 class ListService{
     async execute(){
  // let valores = [];
   //const agendas = await prismaClient.agendamento.findMany({
  

  // }) 
  // console.log(agendas) 
  //  valores.push(agendas)

    const list = await prismaClient.servico.findMany({
   

    select:{  
        id: true,
       nome: true,
       descricao: true,
       valor: true
    }
  

    })  
  
   
   console.log(list)
 
   
   return list;
  }  
    }
  export {ListService}

