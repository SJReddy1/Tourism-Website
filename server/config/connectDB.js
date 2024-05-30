const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        
        const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2ladakb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(connectionString,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
        });

        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit with a non-zero code on failure
    }
};

module.exports = connectDB;
