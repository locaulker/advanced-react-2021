import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email }
      setPeople(people => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>eMail:</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Add Person</button>
        </form>
        {people.map(person => {
          const { id, firstName, email } = person
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <h6>{email}</h6>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
