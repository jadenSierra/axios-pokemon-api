import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [apiData, setApiData] = useState([])
  
  useEffect(() => 
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
      console.log(response.data.results);
      setApiData(response.data.results)
    }), [])

    const handleFetchPokemon = () => {
      setPokemons(apiData)
    }


  return (
    <div className="App">
      <button onClick={e => handleFetchPokemon()}>Fetch Pokemon</button>
      {pokemons.map((pokemon, i) => {
        return <div key={i}>{pokemon.name}</div>
      })}
    </div>
  );
}

export default App;
