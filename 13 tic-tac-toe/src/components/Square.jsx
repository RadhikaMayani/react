import React, { useState } from 'react'

function Square({ value, handleClick }) {


  return (
    <button className="btn" onClick={handleClick}>{value}

    </button>
  )
}

export default Square