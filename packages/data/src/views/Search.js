import React, { useContext } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import SearchBar from '../components/SearchBar';
import { PokemonContext } from '../providers/PokemonProvider';
import PokeballLoading from '../components/PokeballLoading.js';

const Search = () => {
  const { pokemons, loading } = useContext(PokemonContext);

  return (
    <Container>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
        </Grid>
      </Box>

      <Box>
        {loading ? (
          <PokeballLoading />
        ) : (
          <ul>
            {pokemons.map((card) => (
              <li key={card.id}>{card.name}</li>
            ))}
          </ul>
        )}
      </Box>
    </Container>
  );
};

export default Search;
