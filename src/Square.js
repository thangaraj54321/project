import React from 'react'

 const Square =({colorValues, hexValues,isDarkText}) => {

  return (
    <section className='square'
        style={{
            backgroundColor: colorValues,
            color: isDarkText ? "#000" : "#fff"
        }}
     >
        <p>{ colorValues ? colorValues : "Empty Values"}</p>
        <p>{ hexValues ? hexValues : null}</p>
    </section>
  )
}
Square.defaultProps ={
    colorValues: "Empty Color Values"
}

export default Square