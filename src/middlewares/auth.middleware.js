import jwt from 'jsonwebtoken'

import env from '../config/env.js'

import userRepository from '../modules/user/user.repository.js'

const authMiddleware = async (req, res, next) => {
   try {
      const authHeader = req.headers.authorization

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
         return res.status(401).json({
            success: false,
            message: 'Unauthorized'
         })
      }

      const token = authHeader.split(' ')[1]

      const decoded = jwt.verify(token, env.jwtSecret)

      const user = await userRepository.findUserWithPermissionsById(decoded.id)

      if (!user) {
         return res.status(404).json({
            success: false,
            message: 'User not found'
         })
      }

      const permissions = []

      for (const userRole of user.roles) {
         for (const rolePermission of userRole.role.permissions) {
            permissions.push(rolePermission.permission.slug)
         }
      }

      req.user = {
         id: user.id,

         email: user.email,

         permissions
      }

      next()
   } catch (_error) {
      return res.status(401).json({
         success: false,
         message: 'Invalid token'
      })
   }
}

export default authMiddleware
