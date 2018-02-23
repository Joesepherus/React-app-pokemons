import React, { Component } from 'react';
import MultiplePokemonsLink from './multiplePokemonsLink';

class ShowAllPokemons extends Component {
    renderAllPokemons() {
      const { selectPokemon, pokemons } = this.props;
  
      return pokemons.map(pokemon => {
        const { id, name } = pokemon;
        return (
          <MultiplePokemonsLink
            key={id}
            name={name}
            id={id}
            selectPokemon={selectPokemon} />
        );
      });
    }
  
    render() {
      return (
        <div>
          <div className="showAllPokemons">
            {this.renderAllPokemons()}
          </div>
        </div>
      );
    }
  }

export default ShowAllPokemons;
  