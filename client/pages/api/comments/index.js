import { sanityClient2 } from "@lib/sanity";

export default async function handler(req, res) {
  const doc = {
    _type: "comment",
    post: {
      _type: "reference",
      _ref: req.body._id,
    },
    name: req.body.commentName,
    body: req.body.commentBody,
    email: req.body.commentEmail,
    approved: req.body.approved,
    likes: req.body.likes,
    replies: req.body.replies,
    clap_count: req.body.clap_count,
    uid: req.body.uid,
  };

  sanityClient2
    .create(doc)
    .then(async (data) => {
      console.log(`Comment was created, with _id: ${data._id}`);
      console.log("Revalidating Path >", `/post/${req.body.postSlug}`);
      req.body.approved && (await res.revalidate(`/post/${req.body.postSlug}`)); // revalidate relevent post
      console.log("Revalidated Path >", `/post/${req.body.postSlug}`);
      res.status(201).json({
        data,
        message: "Posted",
        postRef: req.body._id,
        approved: req.body.approved,
      });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
}
