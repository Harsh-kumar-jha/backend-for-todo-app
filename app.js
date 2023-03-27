import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});
// using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST", "PUT", "DELETE"],
    Credential: true,
  })
);

// using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// error handler
app.use(errorMiddleware);
