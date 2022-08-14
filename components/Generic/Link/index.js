import React from "react";
import PropTypes from "prop-types";

const Link = ({ href, blank = false, underline, children, className }) => {
  return (
    <a
      href={href}
      target={blank && "_blank"}
      rel={blank && "noopener noreferrer"}
      className={`text-base font-normal text-text decoration-text/[0.6] hover:text-primary hover:decoration-primary hover:underline underline-offset-2 tracking-normal leading-normal transition-colors duration-150 ${
        underline && "underline"
      } ${className}`}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  href: PropTypes.string,
  blank: PropTypes.bool,
  underline: PropTypes.bool,
};

export default Link;
