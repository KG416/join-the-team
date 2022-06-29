// import styles from './TeamMemberItem.module.scss'

const TeamMemberItem = ({ teamMembers }) =>
  teamMembers.map((member) => <li key={member?.id}>{member?.name}</li>)

export default TeamMemberItem
