import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/SIdebar/Sidebar'

import styles from './App.module.css'
import './global.css'



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://xesque.rocketseat.Dev/users/avatar/profile-85559fce-1ed4-43c0-a678-c2365a338b87-1636412686401.jpg",
      name: 'Bruno Mateus',
      role: 'Dev front-end'
    },
    content: [{
      type: 'paragraph',
      content: 'Fala galeraa 👋'
    },
    {
      type: 'paragraph',
      content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é dev.finance 🚀'
    },
    {
      type: 'link',
      content: 'jane.design/dev.finance '
    }],
    publishedAt: new Date('2022-07-27 20:44:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://xesque.rocketseat.dev/users/avatar/profile-85559fce-1ed4-43c0-a678-c2365a338b87-1636412686401.jpg",
      name: 'Bruno Mateus',
      role: 'Dev front-end'
    },
    content: [{
      type: 'paragraph',
      content: 'Fala galeraa 👋'
    },
    {
      type: 'paragraph',
      content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é doctorcare 🚀'
    },
    {
      type: 'link',
      content: 'jane.design/doctorcare '
    }],
    publishedAt: new Date('2022-07-27 21:44:00')
  },

]






function App() {

  return (

    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default App
