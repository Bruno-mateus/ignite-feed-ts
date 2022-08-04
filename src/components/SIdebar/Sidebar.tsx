import sidebarStyle from './Sidebar.module.css'
import { PencilSimpleLine } from "phosphor-react"
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={sidebarStyle.sidebar}>
      <img className={sidebarStyle.cover} src="https://images.unsplash.com/photo-1630710478039-9c680b99f800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={sidebarStyle.profile}>

        <Avatar
          src="https://xesque.rocketseat.dev/users/avatar/profile-85559fce-1ed4-43c0-a678-c2365a338b87-1636412686401.jpg" hasBorder={true} />
        <strong>Bruno Mateus</strong>
        <span>Web developer</span>

      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}