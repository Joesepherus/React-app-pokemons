import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './header.css';
import './footer.css';
import './display-pokemons.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
    