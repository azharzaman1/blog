import React from "react";
import IconButton from "components/Generic/IconButton";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineLink,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import Tooltip from "components/Generic/Tooltip";

const PostShareWidget = ({ slug, horizontal, variant, className }) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  const postURL = `https://blog.azharzaman.com/post/${slug}`;
  const shareURIs = {
    twitter: `https://www.twitter.com/intent/tweet/?url=${postURL}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${postURL}`,
    whatsapp: `https://api.whatsapp.com/send?text=${postURL}`,
    facebook: `https://facebook.com/sharer/sharer.php?u=${postURL}`,
    email: `mailto:?subject=Awesome Article&body=${postURL}`,
  };

  const classes = { button: horizontal ? "ml-2" : "mt-2" };

  return (
    <div className={`post-share-widget ${className}`}>
      <div
        className={`post-share-buttons ${
          horizontal && "flex items-center justify-start"
        }`}
      >
        <Tooltip
          content="Share on Linkedin"
          placement={horizontal ? "top" : "left"}
        >
          <a
            href={shareURIs["linkedin"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant={variant}>
              <AiFillLinkedin />
            </IconButton>
          </a>
        </Tooltip>

        <Tooltip
          content="Share on Linkedin"
          placement={horizontal ? "top" : "left"}
        >
          <a
            href={shareURIs["twitter"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant={variant} className={classes["button"]}>
              <AiOutlineTwitter />
            </IconButton>
          </a>
        </Tooltip>

        <Tooltip
          content="Share on Facebook"
          placement={horizontal ? "top" : "left"}
        >
          <a
            href={shareURIs["facebook"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant={variant} className={classes["button"]}>
              <FaFacebook />
            </IconButton>
          </a>
        </Tooltip>

        <Tooltip
          content="Share on Whatsapp"
          placement={horizontal ? "top" : "left"}
        >
          <a
            href={shareURIs["whatsapp"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant={variant} className={classes["button"]}>
              <FaWhatsapp />
            </IconButton>
          </a>
        </Tooltip>

        <Tooltip
          content="Share via Email"
          placement={horizontal ? "top" : "left"}
        >
          <a
            href={shareURIs["email"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant={variant} className={classes["button"]}>
              <MdAlternateEmail />
            </IconButton>
          </a>
        </Tooltip>

        <Tooltip content="Copy URL" placement={horizontal ? "top" : "left"}>
          <div>
            <IconButton
              variant={variant}
              className={classes["button"]}
              onClick={() => copyToClipboard(postURL)}
            >
              <AiOutlineLink />
            </IconButton>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default PostShareWidget;
