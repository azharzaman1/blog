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

  const styles = {
    h1: "mt-10 text-text font-semibold text-3xl text-gray-900 tracking-tight leading-normal",
    h2: "mt-10 text-text font-semibold text-3xl text-gray-900 tracking-tight leading-normal",
    h3: "mt-8 text-text font-semibold text-2xl text-gray-900 tracking-normal leading-normal",
    h4: "mt-6 text-text font-semibold text-xl text-gray-900 tracking-normal leading-normal",
    h5: "mt-6 text-text font-medium text-xl text-gray-900 leading-normal tracking-normal",
    h6: "mt-6 text-text font-medium text-lg text-gray-900 leading-normal tracking-normal",
  };

  return (
    <Tag className={`${styles[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

export default Heading;
