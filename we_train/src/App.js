import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Header from './components/header/Header.js';

class App extends Component {

  render() {
 
    return (
    	<div className="container-fluid">
	    	<Header/>
			<SearchBar/>
    	</div>
    );
  }
}

export default App;
