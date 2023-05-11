import React from "react";
import PropTypes from "prop-types";

const InlineCode = ({ children, className }) => {
  return (
    <code
      className={`inline-block px-1.5 py-0.5 font-code text-base rounded border border-gray-300 bg-gray-200 ${className}`}
    >
      {children}
    </code>
  );
};

InlineCode.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default InlineCode;
