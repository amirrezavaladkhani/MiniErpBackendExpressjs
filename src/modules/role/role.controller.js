import asyncHandler from '../../utils/asyncHandler.js'

import roleService from './role.service.js'

import { createRoleSchema } from './role.validation.js'

const create = asyncHandler(async (req, res) => {
   const validateData = createRoleSchema.parse(req.body)

   const role = await roleService.createRole(req.body)

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

export default {
   create,
   getAll
}