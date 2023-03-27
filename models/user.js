import mongoose from "mongoose";

// Creating Schema and model for the user database

// schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//model
export const User = mongoose.model("User", schema);
