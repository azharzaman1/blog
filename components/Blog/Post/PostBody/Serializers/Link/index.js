import LinkPreviewWidget from "components/Blog/Post/LinkPreviewWidget";
import Tooltip from "components/Generic/Tooltip";
import ThemeLink from "../../../../../Generic/Link";
import PropTypes from "prop-types";

const Link = ({ children, preview = true, blank = true, href, ...rest }) => {
  return (
    <div className="inline-block post-link">
      <div className="desktop-link-container hidden md:block">
        {preview ? (
          <Tooltip
            content={<LinkPreviewWidget href={href} />}
            className="shadow-xl"
          >
            <span>
              <ThemeLink href={href} blank={blank} {...rest}>
                {children}
              </ThemeLink>
            </span>
          </Tooltip>
        ) : (
          <ThemeLink href={href} blank={blank} {...rest}>
            {children}
          </ThemeLink>
        )}
      </div>

      <div className="mobile-link-container md:hidden">
        <ThemeLink href={href} blank={blank} {...rest}>
          {children}
        </ThemeLink>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  blank: PropTypes.bool,
  href: PropTypes.string,
};

export default Link;
