import { sanityClient2 } from "@lib/sanity";

export default async function handler(req, res) {
  sanityClient2
    .patch(req.query.commentId) // Document ID to patch
    .setIfMissing({ clap_count: 0 })
    .inc({ clap_count: req.body.claps }) // increment clap_count by 1
    .commit() // Perform the patch and return a promise
    .then(async (updated) => {
      console.log("Claped");
      console.log("Revalidating Path >", `/post/${req.body.postSlug}`);
      await res.revalidate(`/post/${req.body.postSlug}`);
      console.log("Revalidated Path >", `/post/${req.body.postSlug}`);
      res.status(201).json({
        message: "Claped",
        _id: updated._id,
        clap_count: updated.clap_count,
        post: { revalidated: true, slug: req.body.postSlug },
      });
    })
    .catch((err) => {
      console.error("Oh no, clap failed coz, ", err.message);
      res.status(500).json({ message: err.message });
    });
}
