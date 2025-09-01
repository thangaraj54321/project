import React from 'react'

const Input = ({
  colorValues,
  setColorValues,
  setHexValues,   // ✅ corrected here
  isDarkText,
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
          setHexValues(e.target.value);   // ✅ corrected here
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}> 
        Toggle Text Color
      </button>
    </form>
  )
}

export default Input
