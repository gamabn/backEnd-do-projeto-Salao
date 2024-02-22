import prismaClient from "../../prisma";

interface ServiRequest{
  nome: string,
  descricao: string,
  valor: number
}
class createBarbaService{
    async execute({nome,descricao,valor}:ServiRequest){
      const service = await prismaClient.servico.create({
        data:{
       nome: nome,
       descricao:descricao,
       valor:valor
        },
        select:{
          nome: true,
          descricao:true,
          valor:true
            }
           
      }) 

  return service
    }
}
export {createBarbaService}