import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PokemonCard from '../PokemonCard/PokemonCard';

import './styles.css';

class PokemonList extends Component {
  render () {
    const { pokemonList } = this.props;
    return (
      <div className="pokemon-container">
        {
          pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              weight={`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
              image={pokemon.image}
            />
          ))
        }
      </div>
    );
  }
}

PokemonList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokemonList;