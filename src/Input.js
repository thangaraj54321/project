import React from 'react'

const Input = ({colorValues ,setColorValues, setHexaValues, isDarkText,
    setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Add Color Name:
      </label>
      <input 
      autoFocus
      type='text'
      value={colorValues}
      placeholder='Add Color Name'
      onChange={(e) => {
        setColorValues(e.target.value)
      }}
      />

    </form>
  )
}

export default Input