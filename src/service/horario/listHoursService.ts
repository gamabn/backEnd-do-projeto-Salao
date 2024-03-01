import prismaClient from "../../prisma";


 class listHoursService{
     async execute(){
  // let valores = [];
   //const agendas = await prismaClient.agendamento.findMany({
  

  // }) 
  // console.log(agendas) 
  //  valores.push(agendas)

  const list = await prismaClient.horario.findMany({
    select: {
        id:true,
        userId: true,
        servicoId: true,
        horarios: true,
        dataAgend: true,
        disponivel: true,
        created_at: true,
        user: {
            select: {
                id: true,
                name: true,
                email: true,
                // Inclua outros campos do usuário, se necessário
            }
        },
        servico: {
            select: {
                nome: true,
                descricao: true,
                valor: true
            }
        }
    }
});
  
   
 //  console.log(list)
 
   
   return list;
  }  
    }
  export {listHoursService}
