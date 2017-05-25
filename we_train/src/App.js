import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import FloatingButtons from './components/FloatingButtons/FloatingButtons.js';
import AppFlow from './components/AppFlow/AppFlow.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      query:[{activity: 6}, {area: null}, {group_size: -1}, {price: 1000000000}],
      savedCards: []
    };
    this.handleQuery = this.handleQuery.bind(this); 
    this.handleSaved = this.handleSaved.bind(this); 
  }
  handleQuery(query){
  	this.setState({ query: query });
  }
  handleSaved(data){
    const savedCards = this.state.savedCards.slice();
    data = data.concat(savedCards);
   
    this.setState({savedCards: data});
     console.log(this.state.savedCards);
  }
  render() {
    return (
    	<div>
  	    <Header/>
  			<SearchBar sendQueryData={this.handleQuery}/>
        <FloatingButtons biz={this.state.savedCards}/>
        <Card query={this.state.query} saveCard={this.handleSaved}/>
        <AppFlow/>
    	</div>
    );
  }
}

export default App;
