
import { useState } from "react";
import { useEffect } from "react";

function useJoke() {
  const [data, setData] = useState('')
  const fetchData = async () => {
    try {
      await fetch("https://v2.jokeapi.dev/joke/any?type=singles")
        .then((res) => res.json())
        .then((res) => setData(res['joke']))
    } catch (error) {
      console.log(error)
    }

  }
  return { joke: data, fetchData }
}

export default useJoke