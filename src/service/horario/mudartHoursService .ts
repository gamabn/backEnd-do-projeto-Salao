import prismaClient from "../../prisma";

class MudarHoursService {
  async execute(id) {
    try {
      // Atualiza o valor da propriedade disponivel para false em todos os registros
      const updatedHours = await prismaClient.horario.update({
       where:{  
        id: id
       },
       data:{
        disponivel:false
       }
       
      });

      console.log(updatedHours); // Mostra os registros atualizados no console

      return updatedHours; // Retorna os registros atualizados
    } catch (error) {
      console.error("Erro ao atualizar horários:", error);
      throw new Error("Erro ao atualizar horários");
    }
  }
}

export { MudarHoursService };