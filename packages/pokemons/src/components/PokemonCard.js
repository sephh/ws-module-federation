import React from 'react';

const PokemonCard = ({ id, name, imageUrl, onClick }) => {
  return (
    <img
      className="fade-in"
      style={styles.pokemonCard}
      src={imageUrl}
      alt={`${id}-${name}`}
      width={'100%'}
      loading={'lazy'}
      onClick={onClick}
    />
  );
};

PokemonCard.propTypes = {
  onClick: () => {},
};

const styles = {
  pokemonCard: {
    objectFit: 'contain',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};

export default PokemonCard;
