import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import AppFlow from './components/AppFlow/AppFlow.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query:[{activity: 6}, {area: null}, {group_size: -1}, {price: 1000000000}]
    };
    this.handleQuery = this.handleQuery.bind(this); 
  }
  handleQuery(query){
  	this.setState({ query: query });
  }
  render() {
    return (
    	<div className="container-fluid">
	    	<Header/>
  			<SearchBar sendQueryData={this.handleQuery}/>
        <Card query={this.state.query}/>
        <AppFlow />
    	</div>
    );
  }
}

export default App;
