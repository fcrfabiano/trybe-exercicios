import React, { Component } from 'react'

import PokemonList from './components/PokemonList/PokemonList';
import Header from './components/Header/Header';
import ButtonNext from './components/ButtonNext/ButtonNext';
import Button from './components/Button/Button';

import pokemons from './data/pokemons';

import './App.css'

class App extends Component{

  constructor () {
    super ();

    this.state = {
      filter: '',
      pokemonList: pokemons
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(param) {
    const data = pokemons.filter((pokemon) => {
      return pokemon.type.includes(param);
    });

    this.setState({
      pokemonList: data
    });
  }
  
  render() {
    return (
      <main>
        <Header title="Pokedéx" />
        <PokemonList pokemonList={this.state.pokemonList} />
        <nav>
          <Button handleFilter={() => this.handleFilter('')} name="All" />
          <Button handleFilter={() => this.handleFilter('Electric')} name="Electric" />
          <Button handleFilter={() => this.handleFilter('Fire')} name="Fire" />
          <Button handleFilter={() => this.handleFilter('Bug')} name="Bug" />
          <Button handleFilter={() => this.handleFilter('Poison')} name="Poison" />
          <Button handleFilter={() => this.handleFilter('Psychic')} name="Psychic" />
          <Button handleFilter={() => this.handleFilter('Normal')} name="Normal" />
          <Button handleFilter={() => this.handleFilter('Dragon')} name="Dragon" />
        </nav>
        <ButtonNext />
      </main>
    );
  }
}

export default App
