import React from "react";
import PortableText from "react-portable-text";
import PropTypes from "prop-types";
import { serializers } from "./Serializers";

const PostBody = ({ content }) => {
  return (
    <article className="post-body mt-12 pb-20">
      <PortableText
        content={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        serializers={serializers}
      />
    </article>
  );
};

PostBody.propTypes = {
  content: PropTypes.object,
};

export default PostBody;
