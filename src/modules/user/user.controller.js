import userService from './user.service.js'

import { loginSchema, registerSchema, updateSchema } from './user.validation.js'
import asyncHandler from '../../utils/asyncHandler.js'

const register = asyncHandler(async (req, res) => {
   const validatedData = registerSchema.parse(req.body)

   const user = await userService.register(validatedData)

   return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: user
   })
})

const login = asyncHandler(async (req, res) => {
   const validatedData = loginSchema.parse(req.body)

   const result = await userService.login(validatedData)

   return res.status(200).json({
      success: true,
      message: 'login successful',
      data: result
   })
})

const me = asyncHandler(async (req, res) => {
   return res.status(200).json({
      success: true,
      data: {
         id: req.user.id,
         firstName: req.user.firstName,
         lastName: req.user.lastName,
         email: req.user.email
      }
   })
})

const index = asyncHandler(async (req, res) => {
   const data = await userService.getAllUsers(req.query)
   return res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data
   })
})

const show = asyncHandler(async (req, res) => {
   const user = await userService.findUserById(req.params.id)

   return res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: user
   })
})

const update = asyncHandler(async (req, res) => {
   const validatedData = updateSchema.parse(req.body)

   const user = await userService.updateUser(
      req.params.id,
      validatedData
   )

   return res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user
   })
})

export default {
   register,
   login,
   me,
   index,
   show,
   update
}
