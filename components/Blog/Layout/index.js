import React from "react";
import Header from "../../Generic/Header";
import Footer from "../../Generic/Footer";
import BlogSidebar from "../Sidebar";

const BlogLayout = ({ children, post }) => {
  return (
    <div className="layout blog-layout min-h-screen flex flex-col">
      <Header />
      <div className="blog-layout-content flex justify-center relative">
        <main className="flex-1">{children}</main>
        <BlogSidebar post={post} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
