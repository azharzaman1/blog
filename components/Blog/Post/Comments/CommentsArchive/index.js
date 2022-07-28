import React from "react";
import PropTypes from "prop-types";
import Heading from "components/Generic/Heading";
import Text from "components/Generic/Text";

const CommentsArchive = ({ comments, className }) => {
  return (
    <div className={`${className}`}>
      <Heading>Discussion</Heading>
      {!comments && <Text className="mt-2">No comments</Text>}
    </div>
  );
};

CommentsArchive.propTypes = {
  className: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsArchive;
