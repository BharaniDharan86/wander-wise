import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    location: {
      type: String,
    },
    title: String,
    description: String,
    likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    likeCount: {
      type: Number,
      default: 0,
    },
    postedDate: {
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

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
