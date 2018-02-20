import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { pokemons: [{
  }] }

  componentDidMount(){
    fetch('/api/pokemons')
      .then(res => res.json())
      .then(pokemons => this.setState({ 
          pokemons
      }))
      .then(console.log(this.state.pokemons))
  }
  render() {
    return (
      <div className="App">
        <h1>Pokemons</h1>
          <ul>
            { this.state.pokemons.map(pokemon =>
              <li key={pokemon.id}>{pokemon.name}</li>
            )}
          </ul>
      </div>
    );
  }
}

export default App;
