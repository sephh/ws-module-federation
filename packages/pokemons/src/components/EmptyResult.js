import React from 'react';
import styled from 'styled-components';

import psyduck from '../assets/images/psyduck.webp';

const EmptyResultContainer = styled.div`
  display: unset;

  .empty-result {
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

const EmptyResult = ({ message, width }) => {
  return (
    <EmptyResultContainer>
      <div className="empty-result">
        <img
          className="empty-result__image"
          width={width}
          src={psyduck}
          alt={'Empty Result'}
        />

        <span className="empty-result__message text-muted">{message}</span>
      </div>
    </EmptyResultContainer>
  );
};

EmptyResult.defaultProps = {
  message: 'Oops... Não encontramos nada.',
  width: 200,
};

export default EmptyResult;
