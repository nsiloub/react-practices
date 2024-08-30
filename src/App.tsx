// TODO: REPLACING ITEMS IN AN ARRAY
// by using spread operator (...) with .slice() operator

import { useState } from 'react';
import './App.css'

let nextId = 3;
const initialArtists = [
  {id: 0, name: "Marta Colvin Andrade" },
  {id: 1, name: "Lamidi Olonade Fakeye" },
  {id: 2, name: "Louise Nevelson" },
];

function List(): React.JSX.Element {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState( initialArtists );

  function handleClick(): void{
    const insertAt = 2 // could be any desired index;
    const nextArtist: typeof initialArtists = [
      ...artists.slice(0, insertAt),
      {id: nextId++, name: name}, // the incrementation is only to avoid the unique key problem while listing on the DOM
      ...artists.slice(insertAt)
    ];

    setArtists(nextArtist);
  };

  return (
    <>
      <h1>Inspiring Sculptors: </h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick} >
        Insert
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}
export default List
