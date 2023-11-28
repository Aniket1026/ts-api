import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in db connection", error);
    process.exit(1);
  }
};
