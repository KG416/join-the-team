import styles from './TeamMemberList.module.scss'
import TeamMemberItem from '../TeamMemberItem'

const TeamMemberList = ({ teamMembers }) => {
  return (
    <ul className={styles.wrapper}>
      <TeamMemberItem teamMembers={teamMembers}/>
    </ul>
  )
}

export default TeamMemberList
