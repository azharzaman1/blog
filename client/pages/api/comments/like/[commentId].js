import { sanityClient2 } from "@lib/sanity";

export default async function handler(req, res) {
  sanityClient2
    .patch(req.query.commentId) // Document ID to patch
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 }) // increment like by 1
    .commit() // Perform the patch and return a promise
    .then((updated) => {
      console.log("Liked");
      res
        .status(201)
        .json({ message: "Liked", _id: updated._id, likes: updated.likes });
    })
    .catch((err) => {
      console.error("Oh no, the update failed: ", err.message);
      res.status(500).json({ message: err.message });
    });
}
