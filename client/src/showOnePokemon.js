import React, { Component } from 'react';
import OnePokemonLink from './onePokemonLink';


class ShowOnePokemon extends Component {
  handleClick(e) {
    const { id, selectPokemon } = this.props;
    e.preventDefault();
    selectPokemon(id);
  }

  renderSelectedPokemon() {
    const { selectedPokemonId, pokemons } = this.props;
    return pokemons.filter(pokemon => {
      return pokemon.id === selectedPokemonId;
    })
      .map(pokemon => {
        const { name, id, sprites, types } = pokemon;
        return (
          <OnePokemonLink
            key={id}
            name={name}
            image={sprites.front_default}
            types={types} />
        );
      });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-2">
          <button type="button" className="btn btn-danger" onClick={this.handleClick.bind(this)}>back</button>
        </div>
        {this.renderSelectedPokemon()}
      </div>
    );
  }
}

export default ShowOnePokemon;
