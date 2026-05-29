import asyncHandler from '../../utils/asyncHandler.js'

import roleService from './role.service.js'

import { createRoleSchema } from './role.validation.js'

const create = asyncHandler(async (req, res) => {
   const validateData = createRoleSchema.parse(req.body)

   const role = await roleService.createRole(validateData)

   return res.status(201).json({
      success: true,
      message: 'Role created successfully.',
      data: role
   })
})

const getAll = asyncHandler(async (req, res) => {
   const roles = await roleService.getAllRoles()

   return res.status(200).json({
      success: true,
      data: roles
   })
})

const removePermission = asyncHandler(async (req, res) => {
   await roleService.removePermissionFromRole(
      req.params.roleId,
      req.params.permissionId
   )

   return res.status(200).json({
      success: true,
      message:
         'Permission removed successfully'
   })
})

export default {
   create,
   getAll,
   removePermission
}