import { Router } from 'express'

import roleController from './role.controller.js'

import authMiddleware from '../../middlewares/auth.middleware.js'

import authorize from '../../middlewares/authorize.middleware.js'

import PERMISSIONS from '../../constants/permissions.js'

const router = Router()

router.post(
   '/',
   authMiddleware,
   authorize(PERMISSIONS.ROLE_CREATE),
   roleController.create
)

router.get(
   '/',
   authMiddleware,
   authorize(PERMISSIONS.ROLE_VIEW),
   roleController.getAll
)

router.delete(
   '/:roleId/permissions/:permissionId',
   authMiddleware,
   authorize(
      PERMISSIONS.ROLE_REMOVE_PERMISSION
   ),
   roleController.removePermission
)

export default router