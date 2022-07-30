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
import AddNewComment from "../../AddNewComment";

const Comment = ({ comment }) => {
  const [claps, setClaps] = useState(comment.clap_count); // claps to render on screen, initially from db, then updated
  const [isAdmin, setIsAdmin] = useState(false);
  const [claping, setClaping] = useState(false); // saving claps to db(sanity)
  const [clapsToUpdate, setClapsToUpdate] = useState(0);
  const debouncedClapCountToUpdate = useDebounce(clapsToUpdate, 2000);

  const [addingReply, setAddingReply] = useState(false);

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
          setClaps(res.data.clap_count);
          setClapsToUpdate(0);
          setClaping(false);
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
      localStorage.getItem("azhar_blog_visitor_uid") ===
      process.env.NEXT_PUBLIC_ADMIN_SECRET_UID
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

        <button
          className="ml-3 text-sm hover:underline cursor-pointer"
          // onClick={() => setAddingReply((prev) => !prev)}
        >
          Reply feature comming soon
          {/* Repl{addingReply ? "ing" : "y"} {isAdmin && "as admin"} */}
        </button>
      </div>

      {/* <div className="comment-replies mt-2">
        {addingReply && (
          <div className="ml-2 border-l-4">
            <div className="add-reply-to-comment ml-2">
              <AddNewComment
                _id={comment._id}
                setCommentPosted={() => {}}
                omitHeading
              />
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Comment;
