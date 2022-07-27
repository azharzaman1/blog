import React from "react";
import PropTypes from "prop-types";
import { urlForImage } from "../../../../../../api/sanity";
import Link from "../Link";

const Image = ({ data, className }) => {
  return (
    <div
      className={`post-body-img flex flex-col items-center mt-8 mb-8 ${className}`}
    >
      {data.caption && (
        <span className="font-medium text-lg mt-4">{data.caption}</span>
      )}
      <img
        src={urlForImage(data.asset)}
        alt={data.alt || "post image"}
        className="max-h-[450px]"
      />
      {data.copyright_owner_url && (
        <div className="post-body-img-source mt-4">
          <em className="font-open-sans text-text-dim">
            [Infographic Source: Awesome{" "}
            <Link href={data.copyright_source_url} underline>
              {data.copyright_source}
            </Link>{" "}
            by{" "}
            <Link href={data.copyright_owner_url} underline>
              {data.copyright_owner}
            </Link>
            ]
          </em>
        </div>
      )}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
};

export default Image;
