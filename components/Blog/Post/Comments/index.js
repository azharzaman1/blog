import React, { useState } from "react";
import Message from "components/Generic/Message";
import AddNewComment from "./AddNewComment";
import CommentsArchive from "./CommentsArchive";

const Comments = ({ comments, _id }) => {
  const [commentPosted, setCommentPosted] = useState(false);
  return (
    <div className="post-comments w-full md:w-[550px]">
      {!commentPosted && (
        <AddNewComment
          _id={_id}
          setCommentPosted={setCommentPosted}
          className="mt-8"
        />
      )}
      {commentPosted && (
        <Message
          type="success"
          title="Comment Posted"
          description="You commend has been sent to the Author and will be added when approved."
          className="mt-8"
        />
      )}

      <CommentsArchive comments={comments} className="mt-16" />
    </div>
  );
};

export default Comments;
