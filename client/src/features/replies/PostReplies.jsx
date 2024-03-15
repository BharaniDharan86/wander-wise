/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { postReplyApi } from "../../services/apiExperience";
import useToken from "../../hooks/useToken";

const PostReplies = ({ postId }) => {
  const [replies, setReplies] = useState("");
  const token = useToken();

  const queryClient = useQueryClient();
  const { mutate: postReply } = useMutation({
    mutationFn: () => postReplyApi(postId, { description: replies }, token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["replies"],
      });
      setReplies("");
    },
  });

  function handlePostReply(e) {
    e.preventDefault();
    postReply();
  }
  return (
    <div>
      <form onSubmit={(e) => handlePostReply(e)}>
        <input
          type="text"
          placeholder="Add Reply"
          value={replies}
          onChange={(e) => setReplies(e.target.value)}
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default PostReplies;
