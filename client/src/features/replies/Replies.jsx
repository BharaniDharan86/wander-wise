/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "@tanstack/react-query";
import { readReply } from "../../services/apiExperience";
import useToken from "../../hooks/useToken";
import { Spinner } from "../../ui/Spinner";
import { HiMiniUser, HiOutlineHandThumbUp } from "react-icons/hi2";
import { likeReply as likeReplyApi } from "../../services/apiExperience";

const Replies = ({ postId }) => {
  const token = useToken();

  const { data, isLoading } = useQuery({
    queryKey: ["replies", postId],
    queryFn: () => readReply(postId, token),
  });

  const { mutate: likeReply } = useMutation({
    mutationFn: (replyId) => likeReplyApi(replyId, token),
  });

  if (isLoading) return <Spinner />;

  if (data.data.length === 0)
    return <p>No replies yet. Be the first to comment</p>;

  console.log(data?.data);

  return (
    <div className="ml-4">
      {data.data.map((reply) => {
        return (
          <div key={reply._id} className="my-3 ">
            <div className="flex gap-2 items-center">
              <HiMiniUser />
              <h1>{reply.user.username}</h1>
            </div>
            <p> {reply.description} </p>
            <div className="flex items-center gap-1">
              <HiOutlineHandThumbUp
                className="cursor-pointer"
                onClick={() => likeReply(reply._id)}
              />
              {reply.likesCount}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Replies;
