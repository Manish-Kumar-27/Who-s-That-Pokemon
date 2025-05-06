
import React from 'react';

const Pokemon = ({ image }) => {
  return (
    <div>
      <img 
        src={image} 
        alt="Guess the Pokémon" 
        style={{
          width: '200px', 
          border: '5px solid #007bff', 
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }} 
      />
    </div>
  );
};

export default Pokemon;
