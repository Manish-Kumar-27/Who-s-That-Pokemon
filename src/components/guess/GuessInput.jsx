import React from 'react';

const GuessInput = ({ guess, setGuess, handleGuess }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGuess(); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={handleKeyDown}  
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
};

export default GuessInput;
