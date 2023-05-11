import React from "react";
import { FaClock } from "react-icons/fa";
import PropTypes from "prop-types";
import { formatDate } from "../../../../../utils";
import Text from "../../../../Generic/Text";

const PostTimeWidget = ({ date, readTime, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span>
        <FaClock className="!text-text-dim !w-5" />
      </span>
      <Text type="info" className="ml-1.5">
        {formatDate(date, "Mon DD, YYYY")}
      </Text>
      {readTime && (
        <>
          <span className="px-1 text-text-dim">-</span>
          <Text type="info">{readTime} min read</Text>
        </>
      )}
    </div>
  );
};

PostTimeWidget.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string,
};

export default PostTimeWidget;
