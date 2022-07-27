import React from "react";
import PropTypes from "prop-types";

const Text = ({ type = "primary", children, className }) => {
  if (type === "primary") {
    return (
      <p
        className={`text-text-dim text-base tracking-normal leading-normal ${className}`}
      >
        {children}
      </p>
    );
  }

  if (type === "info") {
    return (
      <p
        className={`text-text-dim-2 text-xs sm:text-sm tracking-normal leading-normal ${className}`}
      >
        {children}
      </p>
    );
  }
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  type: PropTypes.oneOf(["primary", "info"]),
};

export default Text;
