import prisma from '../../config/prisma.js'

const create = async (data) => {
   return prisma.user.create({
      data
   })
}

const findByEmail = async (email) => {
   return prisma.user.findUnique({
      where: {
         email
      }
   })
}

export default {
   create,
   findByEmail
}
