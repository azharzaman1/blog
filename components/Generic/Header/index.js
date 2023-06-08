import React from "react";
import Button from "../Button";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import ThemeLink from "../Link";
import Image from "next/image";
import IconButton from "../IconButton";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-surface-1">
      <div className="header-container">
        <div className="header-main min-h-[60px] px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <div className="header-main-left">
            <Link href="/">
              <div className="header-left-logo cursor-pointer relative w-24 h-12">
                <Image
                  src="/logo.png"
                  alt="azhar blog logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
          <div className="header-main-center flex-1"></div>
          <div className="header-main-right">
            <div className="header-main-right-btns flex">
              <ThemeLink href="https://www.github.com/azharzaman1" blank>
                <IconButton
                  variant="outlined"
                  color="bnw"
                  className="mr-2 self-center"
                >
                  <FaGithub className="text-gray-600" />
                </IconButton>
              </ThemeLink>
              <ThemeLink href="https://www.azharzaman.com" blank>
                <IconButton
                  variant="outlined"
                  color="bnw"
                  className="mr-2 self-center"
                >
                  <FaGlobe className="text-gray-600" />
                </IconButton>
              </ThemeLink>
              <ThemeLink href="https://www.linkedin.com/in/azhar-zaman" blank>
                <IconButton
                  variant="outlined"
                  color="bnw"
                  className="mr-2 self-center"
                >
                  <FaLinkedin className="text-gray-600" />
                </IconButton>
              </ThemeLink>
              <Link
                href="https://media.graphassets.com/4O2IJQRCRj2dmB4pizhc"
                download
              >
                <Button variant="contained" color="bnw" raised>
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
