import React from "react";
import Link from "../../../../Generic/Link";
import Text from "../../../../Generic/Text";
import PropTypes from "prop-types";

const AuthorWidget = ({
  avatarUrl,
  name,
  externalURL,
  description,
  className,
}) => {
  return (
    <div className={`author flex items-center justify-start ${className}`}>
      <div className="author-image w-10 h-10 rounded-full">
        <img src={avatarUrl} alt={name} />
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
