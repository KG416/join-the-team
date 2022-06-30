import styles from './TeamMemberList.module.scss'

const TeamMemberList = ({ teamMembers }) => (
  <ul className={styles.wrapperUL}>
    {teamMembers.map((member) => (
      <li key={member}>{member}</li>
    ))}
  </ul>
)

export default TeamMemberList
