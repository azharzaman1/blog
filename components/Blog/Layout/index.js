import React from "react";
import Header from "../../Generic/Header";
import Footer from "../../Generic/Footer";

const BlogLayout = ({ children }) => {
  return (
    <div className="layout blog-layout min-h-screen flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
