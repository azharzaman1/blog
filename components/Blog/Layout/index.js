import React from "react";
import Header from "../../Generic/Header";
import Footer from "../../Generic/Footer";
import Container from "components/Generic/Layout/Container";

const BlogLayout = ({ children }) => {
  return (
    <div className="layout blog-layout min-h-screen flex flex-col">
      <Header />
      <div className="blog-layout-content flex justify-center relative">
        <main className="flex-1">{children}</main>
        <aside className="hidden md:block min-w-[400px] min-h-[calc(100vh)] self-start sticky top-0 bg-white border-l border-gray-200">
          Sidebar
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
