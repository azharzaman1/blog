import React from "react";
import PropTypes from "prop-types";

const Normal = ({ children, className }) => {
  return (
    <p
      className={`mt-2 mb-2 text-lg text-text tracking-normal leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
};

Normal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Normal;
