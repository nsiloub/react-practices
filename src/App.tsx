import './App.css'
import { ChangeEvent, useState } from 'react';

function App() {
  const [person, updatePerson] = useState({
    name: "Niki de Saint",
    username:"Kaka",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg"
    }
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const elmName = e.target.name;
    const value = e.target.value;
    if(elmName in person){
      updatePerson({
        ...person,
        [elmName]: value
      })
    }
    if(elmName in person.artwork) {
      updatePerson({
        ...person,
        artwork: {
          ...person.artwork,
          [elmName] : value
        }
      })
    }
    console.log(elmName);
  };

  return (
    <>
      <label>
        Name: 
        <input 
          name='name'
          value={person.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Title: 
        <input 
          name='title'
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label>
        City: 
        <input 
          name='city'
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Image: 
      <label>
        Username: 
        <input 
          name='username'
          value={person.username}
          onChange={handleChange}
        />
      </label>
        <input 
          name='image'
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city} )
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  )
}

export default App
