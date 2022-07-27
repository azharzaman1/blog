import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ children, className }) => {
  return (
    <li className={`text-lg list-disc mt-2 ml-5 md:ml-10 ${className}`}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ListItem;
