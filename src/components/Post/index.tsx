import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./post.module.css";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content{
  type: "paragraph" | "link";
  content: string;
}

interface PostProps{
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const Post = ({ author, publishedAt, content} : PostProps) => {


  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState([
    "Post muito bom, hein ?!"
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  // construindo a função que deleta os comentários, usando o filter()
  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return (comment !== commentToDelete)
    });
    setComments(commentsWithoutDeletedOne)
  }

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    //const newCommentText = event.target.comment.value;
    setComments([...comments, newCommentText]);
    setNewCommentText("")
    //event.target.value = "";
  };

  const handleNewCommentChange = (event: ChangeEvent <HTMLTextAreaElement>) => {
    event.target.setCustomValidity("")

    setNewCommentText(event.target.value);
  };

  const handleNewCommentInvalid = (event:InvalidEvent <HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime="">
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          } 
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment 
          content={comment} 
          key={comment}
          onDeleteComment={deleteComment}/>;
        })}
      </div>
    </article>
  );
};

export default Post;
