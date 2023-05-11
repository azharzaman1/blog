import React from "react";
import PropTypes from "prop-types";

const Italic = ({ children, className }) => {
  return (
    <em className={`font-open-sans text-lg text-text-dim ${className}`}>
      {children}
    </em>
  );
};

Italic.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Italic;
