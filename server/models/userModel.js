import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: "String",
    unique: true,
  },
  password: String,
});

userSchema.methods.comparePassword = async function (userPass, hashedPass) {
  return await bcrypt.compare(userPass, hashedPass);
};
const User = mongoose.model("users", userSchema);

export default User;
