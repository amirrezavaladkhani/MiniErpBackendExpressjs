const bycrypt = require('bcrypt')

const userRepository = require('../repositories/user.repository')

const register = async (data) => {
   const existingUser = await userRepository.findByEmail(data.email)

   if (existingUser) {
      throw new Error('Email already exists')
   }

   const hashedPassword = await bycrypt.hash(data.password, 10)

   const user = await userRepository.create({
      ...data,
      password: hashedPassword
   })

   return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
   }
}

module.exports = {
   register
}
