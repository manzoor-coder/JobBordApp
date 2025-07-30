import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log("MongoDB connected successfully.")
    } catch (error) {
        console.error(error.message)
        process.exit(1);
    }
}

export default connectDB;