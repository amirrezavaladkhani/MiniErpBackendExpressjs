const prisma = require('../config/prisma')

const create = async (data) => {
   return prisma.user.create({ data })
}

const findByEmail = async (email) => {
   return prisma.user.findUnique({ where: { email } })
}

module.exports = {
   create,
   findByEmail
}
