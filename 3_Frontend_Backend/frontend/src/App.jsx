import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })
  return (
    <div>
      <p>{jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p> 
          </div>
        ))
      }
    </div>
  )
}

export default App