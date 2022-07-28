import { sanityClient2 } from "@lib/sanity";

export default async function handler(req, res) {
  sanityClient2
    .patch(req.query.commentId) // Document ID to patch
    .setIfMissing({ clap_count: 0 })
    .inc({ clap_count: 1 }) // increment clap_count by 1
    .commit() // Perform the patch and return a promise
    .then((updated) => {
      console.log("Claped");
      res.status(201).json({
        message: "Claped",
        _id: updated._id,
        clap_count: updated.clap_count,
      });
    })
    .catch((err) => {
      console.error("Oh no, clap failed coz, ", err.message);
      res.status(500).json({ message: err.message });
    });
}
