import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';

class App extends Component {

  render() {
 
    return (
    	<div className="container-fluid">
	    	<Header/>
			<SearchBar/>
			<Card/>
    	</div>
    );
  }
}

export default App;
