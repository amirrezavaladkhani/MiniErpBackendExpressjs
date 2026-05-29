import roleRepository from './role.repository.js'

import AppError from '../../utils/appError.js'

const createRole = async (data) => {
   const existingRole =
      await roleRepository.findByName(data.name)

   if (existingRole) {
      throw new AppError('Role already exists', 400)
   }

   return roleRepository.create(data)
}

const getAllRoles = async () => {
   return roleRepository.getAllRoles()
}

const removePermissionFromRole = async (roleId, permissionId) => {
   const role = roleRepository.findRoleById(Number(roleId))

   if (!role) {
      throw new AppError(
         'Role Not Found',
         404
      )
   }

   const existingRolePermission = await roleRepository.findRolePermission(
      Number(roleId),
      Number(permissionId)
   )

   if (!existingRolePermission) {
      throw new AppError(
         'Permission Not Assigned to role',
         404
      )
   }

   await roleRepository.removePermissionFromRole(
      Number(roleId),
      Number(permissionId)
   )

   return null
}

export default {
   createRole,
   getAllRoles,
   removePermissionFromRole
}