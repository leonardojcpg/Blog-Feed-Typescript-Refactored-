import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import Avatar from "../Avatar";
import styles from "./comment.module.css";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

const Comment = ({content, onDeleteComment}: CommentProps) => {
  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const [likeCount, setLikeCount] = useState(0)

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1
    })
  }


  return (
    <div className={styles.comment}>
      <Avatar 
      src="https://github.com/PedroHP-queiroz.png"
      alt="" 
      hasBorder={false} 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Queiroz</strong>
              <time
                title="15 de fevereiro às 20:37"
                dateTime="2023-02-15 20:37:00"
              >
                Cerca de 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
