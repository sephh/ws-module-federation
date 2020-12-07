import React from 'react';
import pokeball from './pokeball.gif';
import styled from 'styled-components';

const PokeballLoadingContainer = styled.div`
  display: unset;

  .pokeball-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__image {
      img {
        object-fit: contain;
      }
    }

    &__message {
      font-size: 1.6rem;
    }
  }
`;

const PokeballLoading = ({ message = '', size = 200 }) => {
  const handleMessage = () =>
    message ? (
      <span className="pokeball-loading__message text-primary">{message}</span>
    ) : null;

  return (
    <PokeballLoadingContainer>
      <div className="pokeball-loading">
        <div className="pokeball-loading__image">
          <img
            src={pokeball}
            alt={'Pokeball Loading'}
            width={size}
            height={size}
          />
        </div>
        {handleMessage()}
      </div>
    </PokeballLoadingContainer>
  );
};

export default PokeballLoading;
