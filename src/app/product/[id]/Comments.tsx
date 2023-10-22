"use client";
import styles from "@/app/styles/ProductPage.module.css";
import { useState } from "react";
import { createCommentAction } from "@/app/_actions";

type CommentType = {
  productId: number;
  authorId: number;
  body: string;
};

const handleComment = async (productId: number, body: string) => {
  const data = await createCommentAction(productId, body);
};

const Comments = ({
  comments,
  productId,
}: {
  comments: CommentType[];
  productId: number;
}) => {
  const [comment, setComment] = useState("");
  return (
    <div className={styles.comments_container}>
      <input
        type="text"
        className={styles.comment_input}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={() => {
          handleComment(productId, comment);
          setComment("");
        }}
      >
        send comment
      </button>
      <div className={styles.comments}>
        {comments.length > 0 &&
          comments.map((comment) => {
            return <div key={comments.indexOf(comment)}> {comment.body} </div>;
          })}
      </div>
    </div>
  );
};

export default Comments;
