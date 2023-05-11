import React, { useState } from "react";
import Loader from "components/Generic/Loader";

const LinkPreviewWidget = ({ href }) => {
  const [loadingPage, setLoadingPage] = useState(true);

  return (
    <div className="relative">
      <iframe
        src={href}
        onLoad={() => setLoadingPage(false)}
        className="w-full min-w-[50vw] min-h-[60vh]"
      />
      {loadingPage && (
        <div className="iframe-loader flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 bg-black/[0.3] z-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default LinkPreviewWidget;
