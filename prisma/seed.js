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