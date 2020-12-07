import React, { useState, useCallback } from 'react';
import { getCards } from '../api/pokemon.api';

export const usePokemon = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetch = useCallback(async ({ query }) => {
    setLoading(true);

    try {
      const cards = await getCards({ query });

      setLoading(false);
      setPokemons(cards);

      return cards;
    } catch (e) {
      setLoading(false);
      throw new Error(e);
    }
  }, []);

  return {
    fetch,
    loading,
    pokemons,
  };
};
