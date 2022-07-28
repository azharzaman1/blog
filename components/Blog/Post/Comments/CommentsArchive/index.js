import React from "react";
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

export default CommentsArchive;
