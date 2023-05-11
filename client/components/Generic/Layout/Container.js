import PropTypes from "prop-types";

const Container = ({ children, className, maxWidth }) => {
  const widths = {
    sm: "sm:0 max-w-[600px]",
    md: "sm:px-6 md:px-0 max-w-[800px]",
    lg: "sm:px-6 md:px-8 lg:px-0 max-w-[1200px]",
    xl: "sm:px-6 md:px-8 xl:px-0 max-w-[1300px]",
    "2xl": "sm:px-7 md:px-12 lg:px-32 xl:px-40 max-w-[1600px]",
  };

  return (
    <div
      className={`w-full py-0 px-4 ${
        maxWidth && widths[maxWidth]
      } ${className}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Container;
