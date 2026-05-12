import { Router } from 'express'

import userController from './user.controller.js'

import authMiddleware from '../../middlewares/auth.middleware.js'

const router = Router()

router.post('/register', userController.register)

router.post('/login', userController.login)

router.get('/me', authMiddleware, userController.me)

export default router
