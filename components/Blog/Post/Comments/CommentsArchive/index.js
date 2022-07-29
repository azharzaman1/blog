import React from "react";
import PropTypes from "prop-types";
import Heading from "components/Generic/Heading";
import Text from "components/Generic/Text";
import Comment from "./Comment";

const CommentsArchive = ({ comments, className }) => {
  return (
    <div className={`${className}`}>
      <Heading>Discussion</Heading>
      {comments.length === 0 && <Text className="mt-2">No comments</Text>}
      {comments.length > 0 ? (
        <div className="comments-list flex flex-col mt-4">
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

CommentsArchive.propTypes = {
  className: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsArchive;
