import { sanityClient2 } from "@lib/sanity";
import { getPostPathsQuery } from "@lib/sanity/queries";

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // fetch post slugs to revalidate
  sanityClient2
    .fetch(getPostPathsQuery)
    .then((slugs) => {
      slugs.forEach(async (slug, index) => {
        // revalidate slug
        console.log("Revalidating Slug >", `/post/${slug}`);
        await res.revalidate(`/post/${slug}`);
      });
    })
    .catch((err) => {
      return res.status(500).send("Error revalidating:", err.message);
    })
    .finally(() => {
      return res.json({
        revalidated: true,
      });
    });
}
