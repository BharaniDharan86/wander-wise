/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { readReply } from "../../services/apiExperience";
import useToken from "../../hooks/useToken";
import { Spinner } from "../../ui/Spinner";
import { HiMiniUser } from "react-icons/hi2";

const Replies = ({ postId }) => {
  const token = useToken();
  const { data, isLoading } = useQuery({
    queryKey: ["replies", postId],
    queryFn: () => readReply(postId, token),
  });

  if (isLoading) return <Spinner />;

  if (data.data.length === 0)
    return <p>No replies yet. Be the first to comment</p>;

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
          </div>
        );
      })}
    </div>
  );
};

export default Replies;
