/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiOutlineAnnotation, HiOutlineThumbUp } from "react-icons/hi";

function ExperienceItem({ FD }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="text-lg font-semibold">{FD.user.username}</h4>
          <h6 className="text-sm">{FD.date}</h6>
        </div>
        <h1 className="">{FD.location}</h1>
        <p>{FD.description}</p>
        <div className="flex gap-2">
          <span className="flex items-center">
            <HiOutlineThumbUp />
            {FD.likes}
          </span>
          <span className="flex items-center">
            <HiOutlineAnnotation onClick={() => setShowComments(true)} />
            {FD.comments.length}
          </span>
        </div>
      </div>
      <div>
        {showComments && (
          <>
            {FD.comments.map((comment, ind) => {
              return (
                <div key={ind} className="pl-3 my-2">
                  <h4 className="font-semibold">{comment.user.username}</h4>
                  <p>{comment.comment}</p>
                </div>
              );
            })}
            <input type="text" placeholder="Add Comment" />
            <button onClick={() => setShowComments(false)}>close</button>
          </>
        )}
      </div>
    </>
  );
}

export default ExperienceItem;
