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

const getAllUsers = async (query) => {
   const page = Number(query.page) || 1

   const limit = Number(query.limit) || 10

   const search = query.search || ''

   const users = await userRepository.getAllUsers({
      page,
      limit,
      search
   })

   const total = await
      userRepository.countUsers(search)

   return {
      users,
      pagination: {
         total,
         page,
         limit,
         totalPages: Math.ceil(total / limit)
      }
   }
}

const findUserById = async (id) => {
   const user = await userRepository.findUserById(Number(id))

   if (!user) {
      throw new AppError('User not found', 404)
   }

   return user
}

const updateUser = async (id, body) => {
   const user = await userRepository.findUserById(Number(id))

   if (!user) {
      throw new AppError('User not found', 404)
   }

   if (body.email) {
      const existingUser = await userRepository.findByEmail(body.email)

      if (existingUser && existingUser.id !== Number(id)) {
         throw new AppError('Email already exists', 400)
      }
   }

   return userRepository.updateUser(Number(id), body)
}

const deleteUser = async (id) => {
   const user = await userRepository.findUserById(Number(id))

   if (!user) {
      throw new AppError('User not found', 404)
   }

   return userRepository.softDeleteUser(Number(id))
}

const restoreUser = async (id) => {
   const deActiveUser = await userRepository.findDeActiveUserById(Number(id))

   if (!deActiveUser) {
      const activeUser = await userRepository.findUserById(Number(id))
      if (activeUser) {
         throw new AppError('User Already Active', 400)
      }
      throw new AppError('User not found', 404)
   }

   return userRepository.restoreUser(Number(id))
}

export default {
   register,
   login,
   getAllUsers,
   findUserById,
   updateUser,
   deleteUser,
   restoreUser
}
