import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://yuvrajsingh:yuvrajsingh@cluster0.gi3omaj.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
