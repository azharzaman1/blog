import React from "react";
import Heading from "components/Generic/Heading";
import { formatDate } from "../../../../../../utils";
import Text from "components/Generic/Text";
import { FaHands } from "react-icons/fa";
import axios from "@lib/axios";
import { useState } from "react";
import { useEffect } from "react";

const Comment = ({ comment }) => {
  console.log({ comment });
  const [claping, setClaping] = useState(false);
  const [claps, setClaps] = useState(comment.clap_count);
  const [isAdmin, setIsAdmin] = useState(false);

  const clapForCommentHandler = () => {
    setClaping(true);
    axios
      .get(`/comments/clap/${comment._id}`)
      .then((res) => {
        console.log("Comment clap response", res);
        setClaps(res.data.clap_count);
        setClaping(false);
      })
      .catch((error) => {
        console.log("Comment clap error", error);
        setClaping(false);
      });
  };

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
          onClick={clapForCommentHandler}
        >
          <span>{claps}</span>
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
