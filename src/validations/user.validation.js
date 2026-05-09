const { z } = require('zod')

const registerSchema = z.object({
   firstName: z.string().min(2).max(150),

   lastName: z.string().min(2).max(150),

   email: z.email(),

   password: z.string().min(6).max(100)
})

module.exports = {
   registerSchema
}
