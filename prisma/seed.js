import { PrismaClient } from '@prisma/client'

import ROLES from '../src/constants/roles.js'

import PERMISSIONS from '../src/constants/permissions.js'

const prisma = new PrismaClient()

async function main() {
   const adminRole = await prisma.role.create({
      data: {
         name: 'Administrator',
         slug: ROLES.ADMIN
      }
   })

   const permissions = await Promise.all([
      prisma.permission.create({
         data: {
            name: 'Create User',
            slug: PERMISSIONS.USER_CREATE
         }
      }),

      prisma.permission.create({
         data: {
            name: 'Read User',
            slug: PERMISSIONS.USER_READ
         }
      }),

      prisma.permission.create({
         data: {
            name: 'Update User',
            slug: PERMISSIONS.USER_UPDATE
         }
      }),

      prisma.permission.create({
         data: {
            name: 'Delete User',
            slug: PERMISSIONS.USER_DELETE
         }
      }),

      prisma.permission.create({
         data: {
            name: 'Restore User',
            slug: PERMISSIONS.USER_RESTORE
         }
      }),

      prisma.permission.create({
         data: {
            name: 'Assign Role To User',
            slug: PERMISSIONS.USER_ASSIGN_ROLE
         }
      }),

      prisma.permission.create({
         data: {
            name: 'Create Role',
            slug: PERMISSIONS.ROLE_CREATE
         }
      }),

      prisma.permission.create({
         data: {
            name: 'View Roles',
            slug: PERMISSIONS.ROLE_VIEW
         }
      }),

      prisma.permission.create({
         data: {
            name: 'Remove Permission From Role',
            slug: PERMISSIONS.ROLE_REMOVE_PERMISSION
         }
      })


   ])

   for (const permission of permissions) {
      await prisma.rolePermission.create({
         data: {
            roleId: adminRole.id,
            permissionId: permission.id
         }
      })
   }

   console.log('Seed completed')
}

main()
   .catch((error) => {
      console.error(error)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
