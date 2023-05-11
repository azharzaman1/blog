import React from "react";
import Link from "../Link";

const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="footer-content min-h-[50px] flex items-center justify-center">
        <div className="text-text">
          <Link href="http://www.azharzaman.com" blank>
            Azhar Zaman
          </Link>{" "}
          <span>Ⓒ Blog</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
