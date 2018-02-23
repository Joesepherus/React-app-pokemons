
import React, { Component } from 'react';

class MultiplePokemonsLink extends Component {
    handleClick(e) {
      const { id, selectPokemon } = this.props;
      e.preventDefault();
      selectPokemon(id);
    }
  
    render() {
      const { id, name } = this.props;
      return (
        <div className="MultiplePokemonsLink">
          <a href="" onClick={this.handleClick.bind(this)}>
            {name}
          </a>
        </div>
      );
    }
  }

export default MultiplePokemonsLink;
