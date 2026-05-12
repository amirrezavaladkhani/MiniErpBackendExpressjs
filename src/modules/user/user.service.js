import bcrypt from 'bcrypt'

import userRepository from './user.repository.js'

import generateToken from '../../utils/jwt.js'
import AppError from '../../utils/appError.js'

const register = async (data) => {
   const existingUser = await userRepository.findByEmail(data.email)

   if (existingUser) {
      throw new AppError('Email already exists', 400)
   }

   const hashedPassword = await bcrypt.hash(data.password, 10)

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

const login = async (data) => {
   const user = await userRepository.findByEmail(data.email)

   if (!user) {
      throw new AppError('Invalid credentials', 401)
   }

   const isPasswordValid = await bcrypt.compare(data.password, user.password)

   if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401)
   }

   const token = generateToken({
      id: user.id
   })

   return {
      token,
      user: {
         id: user.id,
         firstName: user.firstName,
         lastName: user.lastName,
         email: user.email
      }
   }
}

export default {
   register,
   login
}
