/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  HiOutlineAnnotation,
  HiOutlineThumbUp,
  HiOutlineUser,
} from "react-icons/hi";
import toReadableDate from "../../utils/toReadableDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePostApi } from "../../services/apiExperience";
import useToken from "../../hooks/useToken";
import Replies from "../replies/Replies";
import PostReplies from "../replies/PostReplies";

function ExperienceItem({ FD, userData }) {
  const [showComments, setShowComments] = useState(false);

  const likedPosts = userData.likedPosts;

  const isAlreadyLiked = likedPosts.includes(FD._id);
  const token = useToken();
  const queryClient = useQueryClient();

  const { mutate: likePost } = useMutation({
    mutationFn: () => likePostApi(FD._id, token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["experiences"],
      });
    },
  });

  console.log(FD);
  return (
    <>
      <div>
        <div className="flex items-center gap-2 py-1">
          <HiOutlineUser className="text-sm" />
          <h4 className="text-slate-700">{FD.user.username}</h4>
          <h6 className="text-sm">{toReadableDate(FD.postedDate)}</h6>
        </div>
        <h1 className="text-lg font-semibold">{FD.location}</h1>
        <p>{FD.description}</p>
        <div className="flex gap-2 py-1.5 items-center">
          <span className="flex items-center gap-1 cursor-pointer">
            <HiOutlineThumbUp
              className={`${isAlreadyLiked && "fill-slate-800"}`}
              onClick={likePost}
            />
            {FD.likeCount}
          </span>
          <span className="flex gap-1 items-center cursor-pointer">
            <HiOutlineAnnotation onClick={() => setShowComments(true)} />
            {/* {FD.comments.length} */}
          </span>
        </div>
      </div>
      <div>
        {showComments && (
          <>
            <Replies postId={FD._id} />
            <PostReplies postId={FD._id} />
            <button onClick={() => setShowComments(false)}>close</button>
          </>
        )}
      </div>
    </>
  );
}

export default ExperienceItem;
