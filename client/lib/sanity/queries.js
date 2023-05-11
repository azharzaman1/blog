import { groq } from "next-sanity";

export const getAllPostsQuery = groq`*[_type == 'post'] | order(priority, title) {
    _id,
    title,
    excerpt,
    slug,
    mainImage,
    categories,
    publishedAt,
    readTime
  }`;

export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    author -> {name, image, tagline},
    mainImage,
    categories,
    publishedAt,
    readTime,
    body,
    postTags,
    "comments": *[_type == "comment" && post._ref == ^.id && approved == true],
    "slug": slug.current
  }
  `;

export const getRelatedPostsQuery = groq`*[_type == 'post' && slug.current != $slug] {
    _id,
    title,
    slug,
    mainImage,
    categories,
    publishedAt,
    readTime
  }`;

export const getAllPostComments = groq`*[_type == 'comment' && post._ref == $postID && approved] | order(_createdAt desc) {
      _id,
      _createdAt,
      approved,
      body,
      name,
      email,
      likes,
      pinned,
      pin_priority,
      replies,
      clap_count
    }`;

export const getPostPathsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
