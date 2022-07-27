import { FaDownload } from "react-icons/fa";

const File = ({ name, url }) => {
  return (
    <div className="block file embeded-file my-8">
      <a
        className={`flex items-center justify-center py-2 px-4 bg-surface-1 border max-w-xs`}
        download
        href={url}
        rel="noreferrer"
        target="_blank"
      >
        <FaDownload className="mr-4 cursor-pointer text-text-dim" />
        <span className="hover:text-primary hover:underline underline-offset-2 cursor-pointer transition-colors duration-150">
          {name}
        </span>
      </a>
    </div>
  );
};

export default File;
