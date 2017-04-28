import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import AppFlow from './components/AppFlow/AppFlow.js';
import FloatingButtons from './components/FloatingButtons/FloatingButtons.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      query:[{activity: 6}, {area: null}, {group_size: -1}, {price: 1000000000}],
      savedCards: []
    };
    this.handleQuery = this.handleQuery.bind(this); 
  }
  handleQuery(query){
  	this.setState({ query: query });
  }
  handleSaved(data){
    const savedCards = this.state.savedCards.slice();
    data = data.concat(savedCards);
    this.setState({savedCards: data});
  }
  render() {
    return (

    	<div>
	    <Header/>
			<SearchBar sendQueryData={this.handleQuery}/>
			<Card query={this.state.query}/>
      <FloatingButtons/>
    	</div>
    );
  }
}

export default App;
