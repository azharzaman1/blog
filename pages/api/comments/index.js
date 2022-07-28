import { sanityClient2 } from "@lib/sanity";

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  const {
    _id,
    commentName,
    commentBody,
    commentEmail,
    approved,
    likes,
    replies,
    clap_count,
  } = req.body;

  const doc = {
    _type: "comment",
    post: {
      _type: "reference",
      _ref: _id,
    },
    name: commentName,
    body: commentBody,
    email: commentEmail,
    approved: approved,
    likes,
    replies,
    clap_count,
  };

  sanityClient2
    .create(doc)
    .then((data) => {
      console.log(`Comment was created, document ID is ${data._id}`);
      res.status(201).json({ data, message: "Posted", postRef: _id });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
}
