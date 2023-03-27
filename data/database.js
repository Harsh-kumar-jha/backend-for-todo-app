import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendApis",
    })
    .then(() => {
      console.log("Database is connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
