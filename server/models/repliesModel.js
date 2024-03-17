import mongoose from "mongoose";

const repliesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    experience: {
      type: mongoose.Schema.ObjectId,
      ref: "Experience",
    },
    description: String,
    likesCount: {
      type: Number,
      default: 0,
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    datePosted: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: true,
    toObject: true,
    timestamps: true,
  }
);

const Replies = mongoose.model("Replies", repliesSchema);

export default Replies;
