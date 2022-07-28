import React, { useState } from "react";
import Button from "components/Generic/Button";
import ErrorMessage from "components/Generic/Error";
import Heading from "components/Generic/Heading";
import { useForm } from "react-hook-form";
import axios from "@lib/axios";

const styles = {
  input:
    "border py-1.5 px-2 mt-2 outline-none rounded focus:ring ring-primary ring-opacity-60 w-full md:w-[500px]",
  textarea:
    "border py-1.5 px-2 mt-2 outline-none rounded focus:ring ring-primary ring-opacity-60 w-full md:w-[500px]",
  block: "flex flex-col mt-4",
  form: "flex flex-col mt-4",
  error: "",
};

const AddNewComment = ({ _id, className, setCommentPosted }) => {
  const [posting, setPosting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitComment = (data) => {
    setPosting(true);
    axios
      .post("/comments", {
        ...data,
        _id,
        approved: false,
        likes: 0,
        clap_count: 0,
        replies: [],
      })
      .then((res) => {
        console.log("Comment post response", res);
        setPosting(false);
        setCommentPosted(true);
      })
      .catch((error) => {
        console.log("Comment post error", error);
        setPosting(false);
      });
  };

  return (
    <div className={`add-comment flex flex-col ${className}`}>
      <Heading>Leave a comment!</Heading>

      <form onSubmit={handleSubmit(submitComment)} className={styles.form}>
        {/* Post Name Input */}
        <div className={styles.block}>
          <label htmlFor="comment-name-input">Fullname</label>
          <input
            type="text"
            id="comment-name-input"
            defaultValue=""
            className={`${styles.input}`}
            {...register("commentName", {
              required: { value: true, message: "Name is required!" },
            })}
          />

          {/* Post Name Errors */}
          {errors.commentName?.type === "required" && (
            <ErrorMessage className="mt-2">
              {errors.commentName.message}
            </ErrorMessage>
          )}
        </div>

        {/* Post Email Input */}
        <div className={styles.block}>
          <label htmlFor="comment-email-input">Email address</label>
          <input
            type="text"
            defaultValue=""
            id="comment-email-input"
            className={styles.input}
            {...register("commentEmail", {
              required: { value: true, message: "Email is required!" },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please enter valid email address",
              },
            })}
          />

          {/* Email Errors */}
          {errors.commentEmail?.type === "required" && (
            <ErrorMessage className="mt-2">
              {errors.commentEmail.message}
            </ErrorMessage>
          )}

          {errors.commentEmail?.type === "pattern" && (
            <ErrorMessage className="mt-2">
              {errors.commentEmail.message}
            </ErrorMessage>
          )}
        </div>

        {/* Post Body Input */}
        <div className={styles.block}>
          <label htmlFor="comment-body-input">Your message</label>
          <textarea
            name="comment-body"
            id="commentBody"
            rows="5"
            className={styles.textarea}
            {...register("commentBody", {
              required: { value: true, message: "Message is required!" },
            })}
          />

          {/* Message Body Errors */}
          {errors.commentBody?.type === "required" && (
            <ErrorMessage className="mt-2">
              {errors.commentBody.message}
            </ErrorMessage>
          )}
        </div>

        <div className="mt-4 flex justify-center md:justify-start">
          <Button
            color="bnw"
            variant="outlined"
            className="w-40" // to prevent collapse when loading
            onSubmit={handleSubmit(submitComment)}
            disabled={
              errors.commentName || errors.commentEmail || errors.commentBody
            }
            isSubmitButton
          >
            {posting ? "Posting..." : "Post comment"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewComment;
