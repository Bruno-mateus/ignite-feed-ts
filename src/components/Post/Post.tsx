import { Avatar } from '../Avatar/Avatar';
import { Comments } from '../Comments/Comments';
import postStyles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;

}

interface Content {
  type: string;
  content: string;
}

interface postProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}




export function Post({ author, publishedAt, content }: postProps) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' hh':'mm'h'", { locale: ptBR })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [comments, setComments] = useState(['Boooa dev'])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Campo obrigatório")
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeleteOne)
  }
  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={postStyles.post}>
      <header>
        <div className={postStyles.author}>
          <Avatar src={author.avatarUrl} hasBorder={true} />
          <div className={postStyles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={postStyles.content}>
        {
          content.map(post => {
            if (post.type === "paragraph") {
              return <p key={post.content}>{post.content}</p>
            } else if (post.type === "link") {
              return <p key={post.content} ><a href="#">{post.content}</a></p>
            }
          })
        }


      </div>
      <form onSubmit={handleCreateNewComment} className={postStyles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Escreva um comentário..."
          onChange={handleNewCommentChange}
          required={true}
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}

          >Comentar</button>
        </footer>
      </form>
      <div className={postStyles.commentList}>
        {
          comments.map(comment => {

            return (
              <Comments
                key={comment}
                onDeleteComment={deleteComment}
                content={comment} />)
          }
          )

        }

      </div>
    </article >
  )
}