import React from "react";
import Link from "../../../../Generic/Link";
import Text from "../../../../Generic/Text";
import PropTypes from "prop-types";
import Image from "next/image";

const AuthorWidget = ({
  avatarUrl,
  name,
  variant,
  externalURL,
  description,
  className,
}) => {
  return (
    <div
      className={`author flex ${
        variant === "inline" ? "flex-row" : "flex-col"
      } items-center ${className}`}
    >
      <div className="author-image rounded-full flex items-center justify-center bg-gray-200">
        <Image
          src={avatarUrl}
          alt={name}
          width={variant === "inline" ? 40 : 75}
          height={variant === "inline" ? 40 : 75}
        />
      </div>
      <div
        className={`author-info ml-2 flex flex-col ${
          variant === "inline" ? "items-start justify-start" : "items-center"
        }`}
      >
        <Link href={externalURL || "#"} blank>
          {name}
        </Link>
        <Text type="info">{description || "Content creator"}</Text>
      </div>
    </div>
  );
};

AuthorWidget.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  externalURL: PropTypes.string,
};

export default AuthorWidget;
