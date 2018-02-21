import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    pokemons: [{
      name: "",
      sprites: ""
    }],
    all: [{

    }]
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
    return (
      <div className="App">
        <h1>Pokemons</h1>
        <ul>
          {this.state.pokemons.map(pokemon =>
            <li>{pokemon.name}
            <img src={pokemon.sprites.front_default}></img>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
