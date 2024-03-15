import catchAsyncErr from "../../server/utils/catchAsyncErr.js";
import Experience from "../../server/models/experienceModel.js";
import AppError from "../../server/utils/appError.js";
import User from "../../server/models/userModel.js";

export const readExperience = catchAsyncErr(async (req, res, next) => {
  const { location } = req.query;

  const regexPattern = new RegExp(
    `\\b${location.replace(/\s/g, "\\s*").replace(/,/g, "\\s*,?\\s*")}\\b`,
    "i"
  );

  // const experiences = await Experience.aggregate([
  //   {
  //     $match: {
  //       location: regexPattern,
  //     },
  //   },
  //   {
  //     $lookup: {
  //       from: "Reviews",
  //       localField: "_id",
  //       foreignField: "experience",
  //       as: "comments",
  //     },
  //   },
  //   {
  //     $addFields: {
  //       commentsCount: { $size: "$comments" },
  //     },
  //   },
  // ]);

  const experiences = await Experience.find().populate({
    path: "user",
  });

  /**
   * .populate({
    path: "user",
  });
   */

  res.status(200).json({
    status: "success",
    success: true,
    data: experiences,
  });
});

export const readSingleExperience = catchAsyncErr(async (req, res, next) => {
  const { id } = req.params;
  const singleExperience = await Experience.findById(id).populate("replies");

  if (!singleExperience) return next(new AppError("Cannot able to find", 404));

  return res.status(200).json({
    status: "success",
    success: true,
    singleExperience,
  });
});

export const postExperience = catchAsyncErr(async (req, res, next) => {
  const { location, title, description, postedDate } = req.body;

  const experience = await Experience.create({
    location,
    title,
    postedDate,
    description,
    user: req.user,
  });

  if (!experience)
    return next(new AppError("Failed to Post your Experience", 400));

  res.status(200).json({
    status: "success",
    success: true,
    message: "Posted Successfully!",
  });
});

export const likePost = catchAsyncErr(async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;

  const isAlreadyLiked = await Experience.exists({ _id: id, likes: userId });

  let updatedPost;

  if (isAlreadyLiked) {
    updatedPost = await Experience.findByIdAndUpdate(
      id,
      {
        $pull: {
          likes: userId,
        },
        $inc: {
          likeCount: -1,
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
    updatedPost = await Experience.findByIdAndUpdate(
      id,
      {
        $addToSet: { likes: userId },
        $inc: { likeCount: 1 },
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

export const updatePost = catchAsyncErr(async (req, res, next) => {
  const { id: postId } = req.params;

  const updatedPost = await Experience.findByIdAndUpdate(postId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedPost) return next(new AppError("Unable to update ", 404));

  return res.status(200).json({
    status: "success",
    success: true,
    message: "Updated Successfully",
  });
});

export const deletePost = catchAsyncErr(async (req, res, next) => {
  const { id: postId } = req.params;

  const findPost = await Experience.findById(postId);

  const postOwnerId = findPost.user.toString();
  const currUser = req.user._id;

  currUser.toString();

  if (currUser.toString() !== postOwnerId) {
    return next(new AppError("You don't have access to delete this post"));
  }

  await Experience.findByIdAndDelete(postId);

  return res.status(204);
});
