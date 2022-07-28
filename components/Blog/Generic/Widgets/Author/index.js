import React from "react";
import Link from "../../../../Generic/Link";
import Text from "../../../../Generic/Text";
import PropTypes from "prop-types";
import Image from "next/image";

const AuthorWidget = ({
  avatarUrl,
  name,
  externalURL,
  description,
  className,
}) => {
  return (
    <div className={`author flex items-center ${className}`}>
      <div className="author-image rounded-full">
        <Image src={avatarUrl} alt={name} width={40} height={40} />
      </div>
      <div className="author-info ml-2 flex flex-col items-start justify-start">
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
