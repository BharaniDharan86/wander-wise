import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: "String",
      unique: true,
    },
    password: String,
    likedPosts: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Experience",
      },
    ],

    repliedPosts: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Replies",
      },
    ],
  },
  {
    toJSON: true,
    toObject: true,
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (userPass, hashedPass) {
  return await bcrypt.compare(userPass, hashedPass);
};
const User = mongoose.model("User", userSchema);

export default User;
