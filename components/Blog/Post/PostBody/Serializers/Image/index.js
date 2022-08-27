import React from "react";
import PropTypes from "prop-types";
import { imageBuilder } from "@lib/sanity";
import Image from "next/image";
import Link from "../Link";
import Zoom from "react-medium-image-zoom";

const ImageSerializer = ({ data, className }) => {
  const image = imageBuilder(data.asset);

  return (
    <div
      className={`post-body-img flex flex-col items-center mt-8 mb-8 ${className}`}
    >
      {data.caption && (
        <span className="font-medium text-lg mt-4 mb-2">{data.caption}</span>
      )}
      <div className="relative w-full bg-red-400 flex justify-center">
        <Zoom>
          <Image
            src={image.url()}
            alt={data.alt}
            width={500}
            height={350}
            objectFit="contain"
          />
        </Zoom>
      </div>

      {data.copyright_owner_url && (
        <div className="post-body-img-source mt-4">
          <em className="font-open-sans text-text-dim">
            [Infographic Source: Awesome{" "}
            <Link href={data.copyright_source_url} preview={false} underline>
              {data.copyright_source}
            </Link>{" "}
            by{" "}
            <Link href={data.copyright_owner_url} preview={false} underline>
              {data.copyright_owner}
            </Link>
            ]
          </em>
        </div>
      )}
    </div>
  );
};

ImageSerializer.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
};

export default ImageSerializer;
