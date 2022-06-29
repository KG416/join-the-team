import styles from './JoinTheTeam.module.scss'
import { useState } from 'react'

// components
import Header from '../../components/Header'
import Button from '../../components/Button'

const JoinTheTeam = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(true)

  function teamMemberSubmit(event) {
    event.preventDefault()
    if (!terms) return alert('You must agree to the terms')

    // add member to LC
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <form onSubmit={teamMemberSubmit}>
        <h2>Register</h2>

        <h3>Team player - Be positive - Beat yesterday</h3>

        <p>
          Together we re-define the experience of online gaming through gamification and novel
          technical solutions.
        </p>

        <input
          placeholder="Name"
          type="text"
          required
          data-ga="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          required
          data-ga="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={terms}
            onChange={() => setTerms((prevState) => !prevState)}
          />

          <label htmlFor="terms">
            I agree to the terms
            <span className={styles.hiddenText}>
              {' '}
              and I&apos;ll bring nice fika every friday &#59;&#41;
            </span>
          </label>
        </div>

        <Button>I&apos;m in, sign me up!</Button>

      </form>
    </div>
  )
}

export default JoinTheTeam
