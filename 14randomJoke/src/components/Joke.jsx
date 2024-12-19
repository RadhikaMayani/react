import React from 'react'
import useJoke from '../customHook/useJoke'
import { useState } from 'react'
import { useEffect } from 'react'

function Joke() {
  const { joke, fetchData } = useJoke()
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h5>{joke}</h5>
      <input type="button" value="Generate Joke" onClick={fetchData} />
    </>
  )
}

export default Joke