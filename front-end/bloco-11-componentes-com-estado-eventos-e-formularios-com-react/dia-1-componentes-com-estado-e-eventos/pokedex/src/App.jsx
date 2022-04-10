import React, { Component } from 'react'

import PokemonList from './components/PokemonList/PokemonList';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Header from './components/Header/Header';
import ButtonNext from './components/ButtonNext/ButtonNext';
import Button from './components/Button/Button';

import pokemons from './data/pokemons';

import './App.css'

class App extends Component{

  constructor () {
    super ();

    this.state = {
      index: 0,
      pokemonList: pokemons,
      pokemonsPerPage: 1,
      currentPage: 0,
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage() {
    const pages = Math.ceil(this.state.pokemonList.length / this.state.pokemonsPerPage);

    if (this.state.currentPage < pages - 1) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));
    } else {
      this.setState((prevState) => ({
        currentPage: 0,
      }));
    }
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
        {/* <PokemonList pokemonList={this.state.pokemonList} /> */}
        <PokemonCard pokemon={this.state.pokemonList[this.state.currentPage] || this.state.pokemonList[0]} />
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
        <ButtonNext handlePage={() => this.handlePage()} />
      </main>
    );
  }
}

export default App
