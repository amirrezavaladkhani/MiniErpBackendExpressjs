import prisma from '../../config/prisma.js'

const findRoleById = async (id) => {
   return prisma.role.findUnique({
      where: {
         id
      }
   })
}

const create = async (data) => {
   return prisma.role.create({
      data
   })
}

const findByName = async (name) => {
   return prisma.role.findUnique({
      where: {
         name
      }
   })
}

const getAllRoles = async () => {
   return prisma.role.findMany({
      include: {
         permissions: {
            include: {
               permission: true
            }
         }
      },
      orderBy: {
         createdAt: 'desc'
      }
   })
}

export default {
   findRoleById,
   create,
   findByName,
   getAllRoles
}
