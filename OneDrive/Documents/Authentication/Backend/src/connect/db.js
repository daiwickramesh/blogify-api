const {connect} = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URL)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}
    module.exports = connectDB;