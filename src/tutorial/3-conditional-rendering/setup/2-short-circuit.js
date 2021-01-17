import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(true)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'
  // console.log(secondValue)

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}

      <h1>{text || 'John doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* <h1>{text && 'Hello world'}</h1>
      <h1>{!text && 'Hello world'}</h1> */}
      {!isError && <h1>Error...</h1>}
    </>
  )
}

export default ShortCircuit
