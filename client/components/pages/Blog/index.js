import React from "react";
import PostCard from "../../Blog/Archive/PostCard";
import Container from "../../Generic/Layout/Container";

const Blog = ({ posts }) => {
  return (
    <div className="blog-content py-16 flex justify-center">
      <Container maxWidth="xl">
        <div className="blog-posts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
