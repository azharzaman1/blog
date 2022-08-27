import React from "react";
import RelatedPost from "./RelatedPost";
import client, { imageBuilder } from "@lib/sanity";
import { useEffect } from "react";
import { getRelatedPostsQuery } from "@lib/sanity/queries";
import { useState } from "react";
import { useRouter } from "next/router";
import Heading from "components/Generic/Heading";

const RelatedPostsWidget = ({ className }) => {
  const router = useRouter();
  const [loadingRelatedPosts, setLoadingRelatedPosts] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchRelatedPosts = async () => {
      mounted && setLoadingRelatedPosts(true);
      try {
        const relatedPosts = await client.fetch(getRelatedPostsQuery, {
          slug: router.query.slug,
        });

        mounted && setRelatedPosts(relatedPosts);
      } catch (err) {
        throw err.message;
      } finally {
        mounted && setLoadingRelatedPosts(false);
      }
    };
    fetchRelatedPosts();

    return () => {
      mounted = false;
    };
  }, [router.query.slug]);
  return (
    <div className={`related-posts-widget ${className}`}>
      {relatedPosts && relatedPosts?.length > 0 ? (
        <React.Fragment>
          <Heading variant="h3" type="secondary">
            Related Posts
          </Heading>
          <div className="related-posts flex flex-col space-y-4 mt-4">
            {relatedPosts.map((post) => (
              <RelatedPost
                key={post._id}
                post={{
                  title: post.title,
                  mainImage: imageBuilder(post.mainImage).url(),
                  slug: post.slug.current,
                }}
              />
            ))}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default RelatedPostsWidget;
