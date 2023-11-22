import mongoose from "mongoose";

export const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "start1",
    });
    console.log("db connect successfully");
  } catch (error) {
    console.log("db not connected");
  }
};
