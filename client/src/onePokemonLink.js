import React, { Component } from 'react';

class OnePokemonLink extends Component {
    render() {
      const { name, image, types } = this.props;
      return (
        <div className="col-md-12" id={name}>
          <div className="col-md-2">
            <img alt="pokemon" src={image}></img>
          </div>
          <div className="col-md-2 display-pokemons__text">
            <p>Name: {name}</p>
              <p>Types: {types.map(type =>
                type.type.name)+","}
                </p>
          </div>
        </div>
      );
    }
  }

export default OnePokemonLink;
  