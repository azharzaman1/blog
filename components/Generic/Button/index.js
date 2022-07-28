import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "primary",
  color = "primary",
  size = "md",
  variant = "outlined",
  raised = false,
  startIcon,
  endIcon,
  children,
  className,
  isSubmitButton,
  loading, // TODO
  disabled = false,
  ...rest
}) => {
  const sizes = {
    xs: "text-sm px-3",
    sm: "font-normal text-sm py-0.5 px-4",
    md: "font-medium text-base py-0.5 px-4",
    lg: "font-medium text-base py-2.5 px-8",
  };

  const colorsOutlined = {
    primary: "text-primary hover:bg-primary border-primary",
    bnw: "text-text hover:bg-text border-text focus:bg-text disabled:opacity-50", // black and white
  };

  const colorsContained = {
    primary: "border-primary bg-primary hover:bg-primary-light",
    bnw: "border-text bg-text hover:bg-text hover:bg-opacity-90", // black and white
  };

  const variants = {
    contained: `text-white ${colorsContained[color]}`,
    outlined: `bg-transparent hover:text-white focus:text-white ${colorsOutlined[color]}`,
  };

  if (type === "primary") {
    return (
      <button
        className={`${sizes[size]} ${
          variants[variant]
        } flex flex-row items-center justify-center rounded-full border-2 transition-colors duration-150 tracking-wide leading-7 ${
          raised && "shadow"
        } ${className}`}
        type={isSubmitButton && "submit"}
        disabled={disabled}
        aria-disabled={disabled && true}
        {...rest}
      >
        {startIcon && (
          <span className="primary-button-start-icon mr-2">{startIcon}</span>
        )}

        <span>{children}</span>
        {endIcon && <span className="button-end-icon ml-2">{endIcon}</span>}
      </button>
    );
  }

  if (type === "text") {
    return (
      <button
        className={`flex items-center justify-center text-textBright hover:text-primary-light transition-colors duration-150 ${className}`}
        type={isSubmitButton && "submit"}
        disabled={disabled}
        {...rest}
      >
        {startIcon && (
          <span className="button-start-icon text-button-start-icon mr-2">
            {startIcon}
          </span>
        )}
        <span>{children}</span>
        {endIcon && <span className="button-end-icon ml-2">{endIcon}</span>}
      </button>
    );
  }

  const colorsIconButton = {
    primary: "border-primary",
    bnw: "border-gray-600", // black and white
  };

  if (type === "icon") {
    return (
      <button
        className={`rounded-full p-2 border-2 flex items-center justify-center hover:opacity-80 transition-all duration-150 ${colorsIconButton[color]} ${className}`}
        disabled={disabled}
        {...rest}
      >
        <span>{children}</span>
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  type: PropTypes.oneOf(["primary", "text", "icon"]),
  color: PropTypes.oneOf(["primary", "bnw"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outlined", "contained"]),
  raised: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  isSubmitButton: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
