import React from "react";
import PropTypes from "prop-types";

const OrderedList = ({ children, className }) => {
  return <ol className={`mt-6 mb-4 ${className}`}>{children}</ol>;
};

OrderedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default OrderedList;
