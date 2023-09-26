import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error!');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      })
  }, [])

  return (
    <h1>Check the console for a list of movies!</h1>
  )

}

export default App