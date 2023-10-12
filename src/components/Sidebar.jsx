import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
    <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=50"
    />

    <div className={styles.profile}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/48339491?v=4" />

      <strong>Felipe Alves</strong>
      <span>Front-end Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
    </aside>
  )
}