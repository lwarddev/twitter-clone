import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Error connecting to database:', error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
