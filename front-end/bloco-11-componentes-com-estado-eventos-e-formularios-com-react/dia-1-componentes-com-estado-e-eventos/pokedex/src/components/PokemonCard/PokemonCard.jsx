import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class PokemonCard extends Component {
  render () {
    const {
      name,
      type,
      weight,
      image
    } = this.props;
    return (
      <div className="pokemon-card">
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Avarage weight: {weight}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default PokemonCard;