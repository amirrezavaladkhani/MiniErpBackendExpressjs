import userService from './user.service.js'

import { registerSchema } from './user.validation.js'

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

export default {
   register
}