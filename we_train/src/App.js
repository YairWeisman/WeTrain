import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import AppFlow from './components/AppFlow/AppFlow.js';

class App extends Component {

  render() {
 
    return (
    	<div >
	    	<Header/>
			<SearchBar/>
			<AppFlow/>
			<Card/>
    	</div>
    );
  }
}

export default App;
