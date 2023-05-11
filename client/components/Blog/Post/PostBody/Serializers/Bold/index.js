import React from "react";
import PropTypes from "prop-types";

const Bold = ({ children, className }) => {
  return (
    <strong className={`font-semibold text-lg ${className}`}>{children}</strong>
  );
};

Bold.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Bold;
