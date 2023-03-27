import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendApis",
    })
    .then((c) => {
      console.log(`Database is connected with ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
