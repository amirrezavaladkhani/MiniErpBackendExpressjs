import prisma from '../../config/prisma.js'

const findRoleById = async (id) => {
   return prisma.role.findUnique({
      where: {
         id,
         isActive: true
      },
      include: {
         permissions: {
            include: {
               permission: true
            }
         }
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

const findRolePermission = async (roleId, permissionId) => {
   return prisma.rolePermission.findFirst({
      where: {
         roleId,
         permissionId
      }
   })
}

const updateRole = async (id, data) => {
   return prisma.role.update({
      where: {
         id
      },
      data
   })
}

const removePermissionFromRole = async (
   roleId,
   permissionId
) => {
   return prisma.rolePermission.deleteMany({
      where: {
         roleId,
         permissionId
      }
   })
}

export default {
   findRoleById,
   create,
   findByName,
   getAllRoles,
   findRolePermission,
   removePermissionFromRole,
   updateRole
}
