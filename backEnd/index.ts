import mongoose from 'mongoose';
import { app } from './app';
import dotenv from 'dotenv'
dotenv.config()


const CONNECTION_URL=process.env.MONGO_URL
const PORT = process.env.PORT || 4000;
const DB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL!);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`server is online at http://localhost:${PORT}`);
        });
    } catch (error) {

        console.error('Error connecting to MongoDB:', error);
    }
};

export default DB();