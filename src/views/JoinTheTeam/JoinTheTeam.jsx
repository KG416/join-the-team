// libs
import { useState, useEffect } from 'react'

// style
import styles from './JoinTheTeam.module.scss'

// components
import Header from '../../components/Header'
import Button from '../../components/Button'

// api
import { BASE_URL, ALL_MEMBERS } from '../../api/teamMembers'
import { readTeamMembers, saveTeamMembers } from '../../api/localStorage'

const JoinTheTeam = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(true)
  const [teamMembers, setTeamMembers] = useState([])

  async function getTeamMembers() {
    // read LC
    let teamMembersFromLocalStorage = await readTeamMembers()
    if (!teamMembersFromLocalStorage) {
      teamMembersFromLocalStorage = []
    }

    // fetch API
    const res = await fetch(BASE_URL + ALL_MEMBERS)
    if (!res.ok) return console.log("Couldn't fetch data from API")
    const data = await res.json()
    const teamMembersFromAPI = data?.team

    // TODO: turn into reusable fn that takes an infinite number of arrays a param
    const onlyKeepUniqueMembers = [
      ...new Set([...teamMembersFromLocalStorage, ...teamMembersFromAPI])
    ]
    const allTeamMembers = [...onlyKeepUniqueMembers]

    setTeamMembers(allTeamMembers)
    saveTeamMembers(allTeamMembers)
    setName('')
    setEmail('')
    setTerms(true)
  }

  useEffect(() => {
    getTeamMembers()
  }, [])

  async function teamMemberSubmit(event) {
    event.preventDefault()

    // agree to terms?
    if (!terms) return alert('You must agree to the terms')

    // name exists?
    const currentTeamMembers = await readTeamMembers()
    const nameAlreadyExists = currentTeamMembers.includes(name)
    if (nameAlreadyExists) {
      alert(`A member named ${name} already exists. Enter a different name and try again`)
      setName('')
      setEmail('')
      setTerms(true)
      return
    }

    // add new member -> state + LC
    currentTeamMembers.push(name)
    setTeamMembers(currentTeamMembers)
    saveTeamMembers(currentTeamMembers)
  }

  return (
    <div className={styles.wrapper}>
      <Header teamMembers={teamMembers} />

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
