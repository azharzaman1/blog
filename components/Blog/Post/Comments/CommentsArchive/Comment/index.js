import React from "react";
import Heading from "components/Generic/Heading";
import { formatDate } from "../../../../../../utils";
import Text from "components/Generic/Text";
import { FaHands } from "react-icons/fa";
import axios from "@lib/axios";
import { useState } from "react";
import { useEffect } from "react";
import useDebounce from "hooks/useDebounce";
import { useRouter } from "next/router";

const Comment = ({ comment }) => {
  const [claps, setClaps] = useState(comment.clap_count); // claps to render on screen, initially from db, then updated
  const [isAdmin, setIsAdmin] = useState(false);
  const [claping, setClaping] = useState(false); // saving claps to db(sanity)
  const [clapsToUpdate, setClapsToUpdate] = useState(0);
  const debouncedClapCountToUpdate = useDebounce(clapsToUpdate, 2000);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const clapForCommentHandler = () => {
      console.log("Requesting claps updated in DB");
      setClaping(true);
      axios
        .post(`/comments/clap/${comment._id}`, {
          claps: debouncedClapCountToUpdate,
          postSlug: slug,
        })
        .then(async (res) => {
          console.log("Claps update response recieved", res);
          console.log("Finishing...");
          setClaps(res.data.clap_count);
          console.log("Current claps", res.data.clap_count);
          setClapsToUpdate(0);
          setClaping(false);
          console.log("Finished");
        })
        .catch((error) => {
          console.log("Comment clap error", error);
          setClaping(false);
        });
    };

    if (debouncedClapCountToUpdate > 0) {
      clapForCommentHandler();
    }
  }, [debouncedClapCountToUpdate, comment._id, slug]);

  useEffect(() => {
    if (
      localStorage.getItem("azhar-blog-admin-secret") ===
      process.env.NEXT_PUBLIC_ADMIN_SECRET
    ) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="comment border-l-4 border-b border-b-gray-200 border-l-primary shadow pt-2 pb-4 mt-4 px-4">
      <div className="comment-info flex items-center">
        <Heading type="secondary">{comment.name}</Heading>
        <Text type="info" className="ml-2">
          {formatDate(comment._createdAt, "YYYY/MM/DD")}
        </Text>
      </div>
      <div className="comment-body mt-4">
        <Text>{comment.body}</Text>
      </div>
      <div className="comment-actions flex items-center mt-4">
        <button
          className="flex items-center"
          disabled={claping}
          onClick={() => setClapsToUpdate((prev) => prev + 1)}
        >
          <span>{claps + clapsToUpdate}</span>
          <FaHands className="ml-1" />
        </button>

        <button className="ml-3 text-sm hover:underline cursor-pointer">
          Reply {isAdmin && "as admin"}
        </button>
      </div>
    </div>
  );
};

export default Comment;
