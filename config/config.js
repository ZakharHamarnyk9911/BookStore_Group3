const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
     jwtSecret: process.env.JWT_SECRET || "GROUP_3_KEY", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://group3:group3@groupproject.h1wonux.mongodb.net/?retryWrites=true&w=majority"
    };
    
    export default config