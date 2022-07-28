import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const ErrorMessage = ({ children, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span>
        <FaExclamationCircle className="text-red-500 h-4" />
      </span>
      <span className="ml-2 text-sm text-red-500">{children}</span>
    </div>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ErrorMessage;
