import React from "react";
import PropTypes from "prop-types";

const Qoute = ({ children, className }) => {
  return (
    <blockquote
      className={`mt-2 mb-12 pl-4 font-open-sans italic text-lg leading-relaxed text-text-dim border-l-4 border-primary ${className}`}
    >
      {children}
    </blockquote>
  );
};

Qoute.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Qoute;
