import headerStyle from './Header.module.css'

import logoIgnite from '../../assets/logo.svg'

export function Header() {
  return (
    <>
      <header className={headerStyle.header} >
        <img src={logoIgnite} alt="logotipo do ignite" />
        <strong>Ignite Feed</strong>
      </header>

    </>
  )
}