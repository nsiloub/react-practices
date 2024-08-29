import { useState } from 'react'
import './App.css'

// TODO: DELETING FROM AN ARRAY

const initialArtists = [
  {id: 0, name: 'Marta Colvin Andrade'},
  {id: 1, name: 'Lamidi Olonade Fakeye'},
  {id: 2, name: 'Louise Nevelson'}
]

function List(): React.JSX.Element {
  const [artists, setArtists] = useState(
    initialArtists
  );


  return (
    <>
      <h1>Inspiring Sculptors: </h1>
      <ul>
        {artists.map((artist) => (
            <li key={artist.id}>
              {artist.name}{" "}
              <button onClick={() =>{setArtists(
                artists.filter(a => 
                  a.id !== artist.id
                )
              )}}>
                Delete
              </button>
            </li>
          )
        )}
      </ul>
    </>
  )  
};

export default List
