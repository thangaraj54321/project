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
        setColorValues(e.target.value);
        setHexaValues((e.target.value))
      }}
      />
      <button onClick={() => setIsDarkText(!isDarkText)}> 
        Toggle Text Color
      </button>

    </form>
  )
}

export default Input