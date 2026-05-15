import AppError from '../utils/appError.js'

const authorize = (...permissions) => {
   return async (req, res, next) => {
      const userPermissions = req.user.permissions || []

      const hasPermission = permissions.some((permission) => userPermissions.includes(permission))

      if (!hasPermission) {
         return next(new AppError('forbidden', 403))
      }
      next()
   }
}

export default authorize