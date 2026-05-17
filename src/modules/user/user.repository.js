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

const findUserWithPermissionsById = async (id) => {
   return prisma.user.findUnique({
      where: {
         id
      },
      include: {
         roles: {
            include: {
               role: {
                  include: {
                     permissions: {
                        include: {
                           permission: true
                        }
                     }
                  }
               }
            }
         }
      }
   })
}

export default {
   create,
   findByEmail,
   findUserWithPermissionsById
}
