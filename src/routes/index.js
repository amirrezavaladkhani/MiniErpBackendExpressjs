import { Router } from 'express'

import userRoutes from '../modules/user/user.routes.js'

import roleRoutes from '../modules/role/role.routes.js'

const router = Router()

router.use('/users', userRoutes)

router.use('/roles', roleRoutes)

export default router