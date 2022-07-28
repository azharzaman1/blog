import React from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import Heading from "../Heading";
import Text from "../Text";

const Message = ({ type = "success", className, title, description }) => {
  return (
    <div
      className={`message flex flex-col px-4 py-4 border-4 border-primary border-opacity-10 shadow rounded ${className}`}
    >
      <div className="message-header flex items-start">
        <BsBookmarkCheck className="w-24 h-24 text-green-600" />
        <div className="flex flex-col ml-4">
          <Heading type="primary">{title}</Heading>
          <Text className="ml-1 mt-2">{description}</Text>
        </div>
      </div>
    </div>
  );
};

export default Message;
