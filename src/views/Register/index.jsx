import styles from './Register.module.scss'
import Aside from '../../components/Aside'

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <Aside />

      <h2>Register</h2>
      <h3>Team player - Be positive - Beat yesterday</h3>
      <p>
        Together we re-define the experience of online gaming through gamification and novel
        technical solutions.
      </p>
    </div>
  )
}

export default Register
