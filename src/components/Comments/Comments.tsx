import { set } from 'date-fns'
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import commentStyle from './Comments.module.css'

interface propsComments {
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comments({ content, onDeleteComment }: propsComments) {

  const [likeCount, setLikeCount] = useState(0)


  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={commentStyle.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/2254731?v=4" />

      <div className={commentStyle.commentBox}>
        <div className={commentStyle.commentContent}>
          <header>
            <div className={commentStyle.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button
              onClick={() => onDeleteComment(content)}
              title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>


        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}