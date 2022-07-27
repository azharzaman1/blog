import React from "react";
// import PostCard from "../../Blog/Archive/PostCard";
import Container from "../../Generic/Layout/Container";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div className="blog-content py-16 flex justify-center">
      <Container maxWidth="xl">
        <div className="blog-posts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <h1 key={post._id}>{post.title}</h1>
          ))}
        </div>
      </Container>
    </div>
  );
};

// // <PostCard key={post._id} post={post} />

export default Blog;
