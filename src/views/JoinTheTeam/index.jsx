import styles from './JoinTheTeam.module.scss'
import Aside from '../../components/Header'

const JoinTheTeam = () => {
  return (
    <div className={styles.wrapper}>
      <Aside />

      <h2>JoinTheTeam</h2>
      <h3>Team player - Be positive - Beat yesterday</h3>
      <p>
        Together we re-define the experience of online gaming through gamification and novel
        technical solutions.
      </p>
    </div>
  )
}

export default JoinTheTeam
