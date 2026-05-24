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

export default {
   createRole,
   getAllRoles
}