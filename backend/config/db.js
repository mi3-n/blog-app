const mongoose = require('mongoose');


// Database connection(mongo)
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected ${connect.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;

