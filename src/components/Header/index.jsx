import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h1>
        <span>Join</span>
        <span>the</span>
        <span>team</span>
      </h1>
    </header>
  )
}

export default Header
