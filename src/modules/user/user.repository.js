import prisma from '../../config/prisma.js'

const create = async (data) => {
   return prisma.user.create({
      data
   })
}

const findByEmail = async (email) => {
   return prisma.user.findUnique({
      where: {
         email,
         isActive: true
      }
   })
}

const findUserById = async (id) => {
   return prisma.user.findUnique({
      where: {
         id
      },
      select: {
         id: true,
         firstName: true,
         lastName: true,
         email: true,
         isActive: true,
         createdAt: true,
         updatedAt: true,
         roles: {
            include: {
               role: true
            }
         }
      }
   })
}

const findDeActiveUserById = async (id) => {
   return prisma.user.findFirst({
      where: {
         id,
         isActive: false
      },
      select: {
         id: true,
         firstName: true,
         lastName: true,
         email: true,
         isActive: true,
         createdAt: true,
         updatedAt: true,
         roles: {
            include: {
               role: true
            }
         }
      }
   })
}

const findUserWithPermissionsById = async (id) => {
   return prisma.user.findUnique({
      where: {
         id,
         isActive: true
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

const getAllUsers = async ({ page = 1, limit = 10, search = '' }) => {
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
         ],
         isActive: true
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
         ],
         isActive: true
      }
   })
}

const updateUser = async (id, data) => {
   return prisma.user.update({
      where: {
         id
      },
      data,
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

const softDeleteUser = async (id) => {
   return prisma.user.update({
      where: {
         id
      },
      data: {
         isActive: false
      },
      select: {
         id: true,
         firstName: true,
         lastName: true,
         email: true,
         isActive: true
      }
   })
}

const restoreUser = async (id) => {
   return prisma.user.update({
      where: {
         id
      },
      data: {
         isActive: true
      },
      select: {
         id: true,
         firstName: true,
         lastName: true,
         email: true,
         isActive: true
      }
   })
}

export default {
   create,
   findByEmail,
   findUserWithPermissionsById,
   getAllUsers,
   countUsers,
   findUserById,
   updateUser,
   softDeleteUser,
   restoreUser,
   findDeActiveUserById
}
