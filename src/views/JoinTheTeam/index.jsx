// libs
import { useState, useEffect } from 'react'

// style
import styles from './JoinTheTeam.module.scss'

// components
import Header from '../../components/Header'
import Button from '../../components/Button'

// tjenare
import { BASE_URL, ALL_MEMBERS } from '../../api/teamMembers'
import { readTeamMembers/* , saveTeamMembers */ } from '../../api/localStorage'

const JoinTheTeam = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(true)
  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {}, [])

  async function getTeamMembers() {
    // from local storage
    let teamMembersFromLocalStorage = await readTeamMembers()
    if (!teamMembersFromLocalStorage) {
      teamMembersFromLocalStorage = []
    }

    // from api
    const res = await fetch(BASE_URL + ALL_MEMBERS)
    if (!res.ok) return console.log("Couldn't fetch data from API")
    const data = await res.json()
    const teamMembersFromAPI = data?.team

    setTeamMembers([...teamMembersFromAPI, ...teamMembersFromLocalStorage])
  }

  function teamMemberSubmit(event) {
    event.preventDefault()
    if (!terms) return alert('You must agree to the terms')

    // check if member exists in teamMembers -> return error

    // add member to LC
    //saveTeamMembers()

    getTeamMembers()
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* TODO: remove later */}
      {teamMembers && console.log(teamMembers)}

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
