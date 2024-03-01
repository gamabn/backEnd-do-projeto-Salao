import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        try {
            const user = await prismaClient.user.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    
                }
            });

            if (!user) {
                throw new Error('User not found');
            }

            return user;
        } catch (error) {
            console.error('Error in DetailUserService:', error);
            throw error; // You may handle this error in the controller
        }
    }
}

export { DetailUserService };