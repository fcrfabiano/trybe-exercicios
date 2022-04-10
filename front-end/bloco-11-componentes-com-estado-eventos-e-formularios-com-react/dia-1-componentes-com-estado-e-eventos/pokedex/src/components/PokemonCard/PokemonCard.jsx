import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class PokemonCard extends Component {
  render () {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-card">
        <div className="pokemon-info">
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Avarage weight: {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
        </div>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    );
  }
}

// PokemonCard.propTypes = {
//   pokemon: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     averageWeight: PropTypes.shape({
//       value: PropTypes.string.isRequired,
//       measurementUnit: PropTypes.string.isRequired
//     }).isRequired,
//   }).isRequired
// };

export default PokemonCard;