import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './components/Pokemon/Pokemon';
import GuessInput from './components/guess/GuessInput';
import './App.css';  

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);  


  const getRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 151) + 1;      
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.front_default
    });
    setFeedback('');
    setGuess('');
    setIsCorrect(false);  
  };

  useEffect(() => {
    getRandomPokemon();  
  }, []);

  const handleGuess = () => {
    if (guess.toLowerCase() === pokemon.name) {
      setFeedback('Correct! 🎉');
      setScore(score + 1);
      setIsCorrect(true);  
    } else {
      setFeedback(`Wrong! The correct answer was: ${pokemon.name}`);
    }

    setTimeout(() => {
      getRandomPokemon(); 
    }, 2000);  
  };

  return (
    <div className="App">
      <img 
        src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png" 
        alt="Pokemon Logo" 
        style={{ width: '200px' }}
      />
      <h1>Who's That Pokemon</h1>
      <p>Score: {score}</p>
      {pokemon && <Pokemon image={pokemon.image} isCorrect={isCorrect} />}
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
      <p>{feedback}</p>
    </div>
  );
};

export default App;
