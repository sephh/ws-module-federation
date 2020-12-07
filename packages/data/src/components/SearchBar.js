import React, { useCallback, useContext } from 'react';
import { PokemonContext } from '../providers/PokemonProvider';
import DelayedField from './DelayedField';

const SearchBar = () => {
  const { fetch } = useContext(PokemonContext);

  const search = useCallback(
    ({ target }) => {
      fetch({ query: target.value }).catch((e) => alert(e));
    },
    [fetch]
  );

  return (
    <DelayedField
      fullWidth
      id="search-input"
      name="search-input"
      label="Pesquisar"
      variant="outlined"
      placeholder="Digite o nome do pokemon"
      onChange={search}
    />
  );
};

export default SearchBar;
