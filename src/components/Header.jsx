import styles from './Header.module.css';

import IgniteLogo from '../assets/Ignite-icon-and-logo.svg';

export function  Header () {
 return(
 <header className={styles.header}>
  <img src={IgniteLogo} alt="Logotipo do ignite"/>
  </header>
  ); 
}