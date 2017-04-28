import React, { Component } from 'react';
import './SearchBar.css';
import Select from 'react-select';
import {Form, FormGroup,FormControl, Row, Col} from 'react-bootstrap';
// class SearchButton extends Component {
//   constructor() {
//       super();
//       this.state = {
//       };  
//       this.handleSelect = this.handleSelect.bind(this);
//     }
//   }
//     render () {
//         return (
          
//         );
//   }
// }


class Selection extends Component {
  constructor() {
      super();
      this.state = {
        selection:[],
        value: null,
        location: null,
        name: null
      };  
      this.handleSelect = this.handleSelect.bind(this);
    }

 handleSelect (value) {
    this.setState({ value: value });
    this.props.selected(this.state.name ,this.state.location, value.value);

  }
  componentDidMount() {     
      this.setState({ 
        selection: this.props.selection ,
        location: this.props.location,
        name: this.props.name
      });
  }
    render () {
        return (
          <Select name="selected-area" placeholder={this.props.placeholder} options={this.state.selection}
           value={this.state.value} onChange={this.handleSelect} />
        );
  }
}

class SearchBar extends Component {
  constructor() {
        super();
        this.state = {
          selected :[{activity: null}, {area: null}, {group_size: null}, {price: null}]
        };
        this.handleSelectState = this.handleSelectState.bind(this); 
        this.handleSearch = this.handleSearch.bind(this);  
      }
  handleSelectState(name ,location, value){
    var selected = this.state.selected.slice();
    selected[location][name] = value;
    this.setState({ selected: selected });
  }

  handleSearch(){
    this.props.sendQueryData(this.state.selected);
  }
  render() {
    var options = {
              activies:   [{ value: 'TRX', label: 'TRX' },
                           { value: 'Runnig', label: 'Runnig' },
                           { value: 'Crossfit', label: 'Crossfit' },
                           { value: 'Swimming', label: 'Swimming' },
                           { value: 'Kickbox', label: 'Kickbox' }],
              areas:      [{ value: 'Tel-Aviv', label: 'Tel-Aviv' },
                           { value: 'Herzlia', label: 'Herzlia' }],
              group_size: [{ value: 'Personal', label: 'Personal' },
                           { value: 'Up to two', label: 'Up to two' },
                           { value: 'Up to five', label: 'Up to five' },
                           { value: 'Up to ten', label: 'Up to ten' },
                           { value: 'More than ten', label: 'More than ten' }]
  };
    return (

       <Row className="search-bar">
            <Col sm={2} smOffset={1}>
              <Selection name={"activity"} location={0} selection={options.activies} selected={this.handleSelectState} placeholder="Choose Avtivity"/>
             </Col>
             <Col sm={2}>
              <Selection name={"area"} location={1} selection={options.areas} selected={this.handleSelectState} placeholder="Choose Area"/>
            </Col>
            <Col sm={2}>
              <Selection name={"group_size"} location={2} selection={options.group_size} selected={this.handleSelectState} placeholder="Groups Size"/>
            </Col>
            <Col sm={2}>
              <FormControl name={"group_size"} type="text" onChange={(e) => this.handleSelectState("price",3,e.target.value)} placeholder="Price per hour (max)" />
<<<<<<< HEAD
            </Col>
            <Col sm={2}>
              <button type="submit" className="btn btn-success" onClick={() => this.handleSearch()}>Look Up Groups</button>
=======
              </Col>
              <Col sm={6}>
              <button className="btn btn-success" onClick={() => this.handleSearch()}>Look Up Groups</button>
               </Col>
>>>>>>> tomer
            </Col>
      </Row>
    );
  }
}

export default SearchBar;
