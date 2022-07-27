import React from "react";
import PropTypes from "prop-types";

const UnorderedList = ({ children, className }) => {
  return <ul className={`mt-6 mb-4 ${className}`}>{children}</ul>;
};

UnorderedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default UnorderedList;
