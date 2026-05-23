import prisma from '../../config/prisma.js'

const findRoleById = async (id) => {
   return prisma.role.findUnique({
      where: {
         id
      }
   })
}

export default {
   findRoleById
}
