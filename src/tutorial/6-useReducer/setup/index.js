import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'

// reducer function
const reducer = (state, action) => {
  console.log(state)
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added'
    }
  }
  throw new Error('no matching action type')
}

// defaultState function
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

// Index Component
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = e => {
    e.preventDefault()
    const newItem = { id: new Date().getTime().toString(), name }
    if (name) {
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map(person => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
