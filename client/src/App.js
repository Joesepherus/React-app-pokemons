import React, { Component } from 'react';
import './App.css';
import ShowAllPokemons from './showAllPokemons';
import ShowOnePokemon from './showOnePokemon';


//const NavContainer = createReactClass({
class App extends Component {
  state = {
    pokemons: [{
      name: "",
      sprites: "",
    }],
    selectedPokemonId: "",
    showAll: true,
    showOne: false,
  }

  selectPokemon = (pokemonId) => {
    this.setState({
      selectedPokemonId: pokemonId
    });
    this.setState({ showAll: !this.state.showAll });
    this.setState({ showOne: !this.state.showOne });
  }

  componentDidMount() {
    fetch('/api/pokemons')
      .then((response) => response.json())
      .then(pokemons => this.setState({
        pokemons: pokemons
      }))
      .then(console.log(this.state.pokemons))
  }

  render() {
    const {
      pokemons,
      selectedPokemonId
    } = this.state;
    return (
      <div className="App">
        {this.state.showAll && <ShowAllPokemons
          pokemons={pokemons}
          selectPokemon={this.selectPokemon} />}

        {this.state.showOne && <ShowOnePokemon
          pokemons={pokemons}
          selectedPokemonId={selectedPokemonId}
          selectPokemon={this.selectPokemon} />}
      </div>
    );
  }
}

export default App;
