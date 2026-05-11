import userService from './user.service.js'

import { loginSchema, registerSchema } from './user.validation.js'

const register = async (req, res) => {
   try {
      const validatedData = registerSchema.parse(req.body)

      const user = await userService.register(validatedData)

      return res.status(201).json({
         success: true,
         message: 'User registered successfully',
         data: user
      })
   } catch (error) {
      return res.status(400).json({
         success: false,
         message: error.message
      })
   }
}

const login = async (req, res) => {
   try {
      const validatedData = loginSchema.parse(req.body)

      const result = await userService.login(validatedData)

      return res.status(200).json({
         success: true,
         message: 'login successful',
         data: result
      })
   } catch (error) {
      return res.status(400).json({
         success: false,
         message: error.message,
      })
   }
}

export default {
   register,
   login,
}