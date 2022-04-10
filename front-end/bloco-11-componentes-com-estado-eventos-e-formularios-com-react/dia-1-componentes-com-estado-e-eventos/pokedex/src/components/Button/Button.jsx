import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Button extends Component {
  render () {
    const { name } = this.props;
    return (
      <button onClick={this.props.handleFilter} className="button">{ name }</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;