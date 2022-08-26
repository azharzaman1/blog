import React from "react";
import Heading from "components/Generic/Heading";
import Container from "components/Generic/Layout/Container";
import AuthorWidget from "../Generic/Widgets/Author";
import RelatedPostsWidget from "../Generic/Widgets/RelatedPostsWidget";

const BlogSidebar = () => {
  return (
    <aside className="hidden md:flex md:min-w-[300px] lg:min-w-[400px] md:max-w-[300px] lg:max-w-[400px] min-h-[calc(100vh)] self-start sticky top-0 bg-white border-l border-gray-200 justify-center pt-8">
      <Container>
        <div className="blog-post-sidebar-content">
          <div className="blog-post-author">
            <AuthorWidget
              variant="block"
              name="Azhar Zaman"
              description="MERN stack developer"
              avatarUrl="https://cdn.sanity.io/images/r4trdkw6/production/57c2f3dc5f8db3360bd8201f8c33674d0fd654f2-612x612.png"
              externalURL="https://www.azharzaman.com"
            />
          </div>
          <div className="mt-4 w-1/4 h-0.5 rounded-full bg-primary mx-auto" />

          <div className="related-posts-section mt-8">
            <RelatedPostsWidget />
          </div>
        </div>
      </Container>
    </aside>
  );
};

export default BlogSidebar;
