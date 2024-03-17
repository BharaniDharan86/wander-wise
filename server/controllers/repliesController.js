import catchAsyncErr from "../../server/utils/catchAsyncErr.js";
import Replies from "../../server/models/repliesModel.js";
import AppError from "../../server/utils/appError.js";
import User from "../../server/models/userModel.js";

export const postReply = catchAsyncErr(async (req, res, next) => {
  const { id: postId } = req.params;
  const userId = req.user._id;

  const newReplies = await Replies.create({
    user: userId,
    experience: postId,
    description: req.body.description,
  });

  await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: {
        repliedPosts: newReplies._id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!newReplies) next(new AppError("Failed to post Reply", 404));

  return res.status(200).json({
    status: "success",
    success: true,
    message: "Posted Successfully",
  });
});

//READ REPLY

export const readReplies = catchAsyncErr(async (req, res, next) => {
  const { id: postId } = req.params;

  const replies = await Replies.find({ experience: postId }).populate({
    path: "user",
    select: "username",
  });

  if (!replies)
    return res.status(200).json({
      status: "success",
      data: "No replies yet be the first one to reply",
    });

  return res.status(200).json({
    status: "success",
    success: true,
    data: replies,
  });
});

//UPDATE REPLY

export const updateReply = catchAsyncErr(async (req, res, next) => {
  const { id } = req.params;

  const updatedReplies = await Replies.findByIdAndUpdate(
    id,
    {
      description: req.body.description,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedReplies) next(new AppError("Failed to Update the Reply", 400));

  return res.status(200).json({
    status: "success",
    success: true,
  });
});

//DELETE REPLY

export const deleteReply = catchAsyncErr(async (req, res, next) => {
  const { id } = req.params;
  await Replies.findByIdAndDelete(id);
  return res.status(204);
});

export const likeReply = catchAsyncErr(async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;

  const isAlreadyLiked = await Replies.exists({ _id: id, likes: userId });

  let updatedPost;

  if (isAlreadyLiked) {
    updatedPost = await Replies.findByIdAndUpdate(
      id,
      {
        $pull: {
          likes: userId,
        },
        $inc: {
          likeSCount: -1,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    await User.findByIdAndUpdate(userId, {
      $pull: {
        likedPosts: id,
      },
    });

    return res.status(200).json({
      status: "success",
      success: true,
      message: "disliked",
    });
  } else {
    updatedPost = await Replies.findByIdAndUpdate(
      id,
      {
        $addToSet: { likes: userId },
        $inc: { likesCount: 1 },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    await User.findByIdAndUpdate(userId, {
      $addToSet: {
        likedPosts: id,
      },
    });
    return res.status(200).json({
      status: "success",
      success: true,
      message: "liked",
    });
  }
});
