import React from 'react';
import styled from 'styled-components';

import PokeballLoading from './PokeballLoading.js';
import PokemonCard from './PokemonCard';
import EmptyResult from './EmptyResult';

const CardGridContainer = styled.div`
  display: unset;

  .card-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    transition: all 0.3s;

    &--mini {
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(102px, 1fr));
    }
  }
`;

const CardGrid = ({ cards, loading }) => {
  const renderHandle = () => {
    const noCards = !cards || !cards.length;

    if (loading) {
      return <PokeballLoading />;
    }

    if (noCards) {
      return <EmptyResult />;
    }

    return (
      <div className="card-grid">
        {cards.map((card) => (
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    );
  };

  return <CardGridContainer>{renderHandle()}</CardGridContainer>;
};

CardGrid.defaultProps = {
  cards: [],
};

export default CardGrid;
