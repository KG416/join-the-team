import styles from './Header.module.scss'
import TeamMemberList from '../TeamMemberList'

const Header = ({ teamMembers }) => {
  return (
    <header className={styles.wrapper}>
      <h1>
        <span>Join</span>
        <span>the</span>
        <span>team</span>
      </h1>

      <TeamMemberList teamMembers={teamMembers} />
    </header>
  )
}

export default Header
