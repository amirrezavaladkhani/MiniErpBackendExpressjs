import { Router } from 'express'

import userController from './user.controller.js'

import authMiddleware from '../../middlewares/auth.middleware.js'

import authorize from '../../middlewares/authorize.middleware.js'

import PERMISSIONS from '../../constants/permissions.js'

const router = Router()

router.post('/register', userController.register)

router.post('/login', userController.login)

router.get('/me', authMiddleware, userController.me)

router.get(
   '/',
   authMiddleware,
   authorize(PERMISSIONS.USER_READ),
   userController.index
)

router.get(
   '/:id',
   authMiddleware,
   authorize(PERMISSIONS.USER_READ),
   userController.show
)

router.put(
   '/:id',
   authMiddleware,
   authorize(PERMISSIONS.USER_UPDATE),
   userController.update
)

router.delete(
   '/:id',
   authMiddleware,
   authorize(PERMISSIONS.USER_DELETE),
   userController.destroy
)

router.patch(
   '/:id/restore',
   authMiddleware,
   authorize(PERMISSIONS.USER_RESTORE),
   userController.restore
)

router.post(
   '/:id/roles',
   authMiddleware,
   authorize(PERMISSIONS.USER_ASSIGN_ROLE),
   userController.assignRole
)

export default router
