import { useState } from 'react'
import './App.css'
let nextId = 0;
function App(): React.JSX.Element {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState<{
    id: number,
    name: string
  }[]>([{id: 1, name: "random"}]);


  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          // setArtists(artists.concat({id: nextId++, name: name}))
          // setArtists([{id: nextId++, name: name}, ...artists])
          setArtists([{id: nextId++, name: name}].concat(artists))
        }}
      >Add</button>
      <ul>
        {artists.map(
          (artist) => <li key={artist.id}> {artist.name} </li>
        )}
      </ul>
    </>
  )
}

export default App
