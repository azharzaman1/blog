import React from "react";
import AddNewComment from "./AddNewComment";
import CommentsArchive from "./CommentsArchive";

const Comments = () => {
  const comments = [];

  return (
    <div className="post-comments">
      <AddNewComment />
      <CommentsArchive
        comments={[].length > 0 ? comments : null}
        className="mt-16"
      />
    </div>
  );
};

export default Comments;
