import prismaClient from "../../prisma";
class listUserService{
    async execute(){
 // let valores = [];
  //const agendas = await prismaClient.agendamento.findMany({
 

 // }) 
 // console.log(agendas) 
 //  valores.push(agendas)

   const list = await prismaClient.user.findMany({
  

   select:{  
       id: true,
      name: true,
      email: true,
      password: true
   }
 

   })  
 
  
  //console.log(list)

  
  return list;
 }  
   }
 export {listUserService}

