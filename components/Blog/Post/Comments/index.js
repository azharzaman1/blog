import React, { useState } from "react";
import Message from "components/Generic/Message";
import AddNewComment from "./AddNewComment";
import CommentsArchive from "./CommentsArchive";

const Comments = ({ comments, _id }) => {
  const [showApprovalMessage, setShowApprovalMessage] = useState(false);
  return (
    <div className="post-comments w-full md:w-[550px]">
      {!showApprovalMessage && (
        <AddNewComment
          _id={_id}
          setShowApprovalMessage={setShowApprovalMessage}
          className="mt-8"
        />
      )}
      {showApprovalMessage && (
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
