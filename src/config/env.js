const env = {
   port: process.env.PORT || 3000,

   nodeEnv: process.env.NODE_ENV || 'development',

   jwtSecret: process.env.JWT_SECRET,

   databaseUrl: process.env.DATABASE_URL
}

export default env