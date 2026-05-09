const userService = require('../services/user.service')

const { registerSchema } = require('../validations/user.validation')

const register = async (req, res) => {
   try {
      const validateData = registerSchema.parse(req.body)

      const user = await userService.register(validateData)

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

module.exports = {
   register
}
