import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: "String",
    unique: true,
  },
  password: String,
});

const User = mongoose.model("users", userSchema);

export default User;
