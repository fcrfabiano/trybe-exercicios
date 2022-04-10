import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ButtonNext extends Component {
  render () {
    const { handlePage } = this.props;
    return (
      <button onClick={() => handlePage()} className="button-next">Pŕoximo Pokemon</button>
    );
  }
}

export default ButtonNext;