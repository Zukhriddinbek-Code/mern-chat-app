import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connected to DB");
    });
    connection.on("error", (error) => {
      console.log("something went wrong in mongodb", error);
    });
  } catch (error) {
    console.log("DB something went wrong", error);
  }
};
