import React from "react";
import PropTypes from "prop-types";

const Heading = ({
  type = "primary",
  className,
  variant,
  children,
  ...rest
}) => {
  const Tag = variant || "h2";

  if (type === "primary") {
    return (
      <Tag
        className={`heading heading-primary font-semibold text-2xl md:text-3xl lg:text-4xl leading-relaxed md:tracking-tight ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    );
  }

  if (type === "secondary") {
    return (
      <Tag
        className={`heading heading-secondary font-semibold text-lg tracking-normal leading-normal ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default Heading;
