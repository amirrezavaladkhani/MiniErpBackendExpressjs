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
      }, include: {
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

const getAllUsers = async ({
                              page = 1,
                              limit = 10,
                              search = ''
                           }) => {
   const skip = (page - 1) * limit

   return prisma.user.findMany({
      where: {
         OR: [
            {
               firstName: {
                  contains: search,
                  mode: 'insensitive'
               }
            },
            {
               lastName: {
                  contains: search,
                  mode: 'insensitive'
               }
            },
            {
               email: {
                  contains: search,
                  mode: 'insensitive'
               }
            }
         ]
      },
      skip,
      take: limit,
      orderBy: {
         createdAt: 'desc'
      },
      select: {
         id: true,
         firstName: true,
         lastName: true,
         email: true,
         isActive: true,
         createdAt: true
      }
   })
}

const countUsers = async (search = '') => {
   return prisma.user.count({
      where: {
         OR: [
            {
               firstName: {
                  contains: search, mode: 'insensitive'
               }
            },
            {
               lastName: {
                  contains: search, mode: 'insensitive'
               }
            }, {
               email: {
                  contains: search, mode: 'insensitive'
               }
            }]
      }
   })
}

export default {
   create, findByEmail, findUserWithPermissionsById, getAllUsers, countUsers
}
