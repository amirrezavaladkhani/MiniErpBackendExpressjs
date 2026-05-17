import { ZodError } from 'zod'

const errorMiddleware = (error, req, res, _next) => {
   let statusCode = error.statusCode || 500

   let message = error.message || 'Internal Server Error'

   let errors = null

   if (error instanceof ZodError) {
      statusCode = 400

      message = 'Validation Error'

      errors = error.issues.map((issue) => ({
         field: issue.path[0],
         message: issue.message
      }))
   }

   return res.status(statusCode).json({
      success: false,
      message,
      errors
   })
}

export default errorMiddleware
