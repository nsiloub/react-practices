// TODO: UPDATING OBJECTS INSIDE ARRAYS

import { useState } from 'react';
import './App.css';

const initialList = [
  {id: 0, title: "Big Bellies", seen: false},
  {id: 1, title: "Lunar Landscape", seen: false},
  {id: 2, title: "Terracotta Army", seen: true},
];

function ItemList({artworks, onToggle}: {artworks: typeof initialList, onToggle: (id: number, isChecked: boolean) => void}): React.JSX.Element{
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type='checkbox'
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(
                  artwork.id,
                  e.target.checked,
                )
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  )
};

function BucketList(): React.JSX.Element {
  const [myList, setMyList] = useState( initialList );
  const [yourList, setYourList] = useState( initialList );

  function handleMyListToggle(artworkId: number, isChecked: boolean,): void {
    const nextList = myList.map((artwork) =>{
      if(artwork.id === artworkId) {
        return {...artwork, seen: isChecked}
      } else {
        return artwork;
      }
    });

    setMyList(nextList);
  };
  function handleYourListToggle(artworkId: number, isChecked: boolean,): void {
    const nextList = yourList.map((artwork) =>{
      if(artwork.id === artworkId) {
        return {...artwork, seen: isChecked}
      } else {
        return artwork;
      }
    });

    setMyList(nextList);
  };


  return (
    <>
      <h1>Art Bucket List</h1>

      <h2>My List of art to  see:</h2>
      <ItemList 
        artworks={myList}
        onToggle={handleMyListToggle}
      />

      <h2>Your list of art to see: </h2>
      <ItemList 
        artworks={yourList}
        onToggle={handleYourListToggle}
      />
    </>
  )
}
export default BucketList
