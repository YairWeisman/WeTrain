import React, { Component } from 'react';
import './SearchBar.css';
import Select from 'react-select';
import {Form, FormGroup,FormControl, Row, Col}from 'react-bootstrap';

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
        value: "tomer"
      };  
      this.handleSelect = this.handleSelect.bind(this);
    }

 handleSelect (value) {
    console.log(value);
    this.setState({ value: value });

  }
  componentDidMount() {     
      this.setState({ selection: this.props.selection });
  }
    render () {
        return (
          <Select name="selected-area" placeholder="Select" options={this.state.selection}
           value={this.state.value} onChange={this.handleSelect} />
        );
  }
}

class SearchBar extends Component {
  constructor() {
        super();
        this.state = {
          seleted :[{activity: null}, {area: null}, {group_size: null}, {price: null}]
        };  
      }
  handleSelectState(field, value){
    this.setState({ value: value });
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
                           { value: 'More than ten', label: 'More than ten' }],
              // time_range: [{ value: '06:00-09:00', label: '06:00-09:00' },
              //              { value: '09:00-12:00', label: '09:00-12:00' },
              //              { value: '12:00-15:00', label: '12:00-15:00' },
              //              { value: '15:00-18:00', label: '15:00-18:00' },
              //              { value: '18:00-21:00', label: '18:00-21:00' },
              //              { value: '21:00-24:00', label: '21:00-24:00' }]
  };
    return (

       <div className="row search-bar">
            <Col sm={2} smOffset={1}>
              <Selection selection={options.activies} selected={this.handleSelectState} placeholder="Choose Avtivity"/>
             </Col>
             <Col sm={2}>
              <Selection selection={options.areas} selected={this.handleSelectState} placeholder="Choose Area"/>
            </Col>
            <Col sm={2}>
              <Selection selection={options.group_size} selected={this.handleSelectState} placeholder="Groups Size"/>
            </Col>
            <Col sm={4}>
              <Col sm={6}>
              <FormControl type="text" placeholder="Price per hour (max)" />
              </Col>
              <Col sm={6}>
              <button type="submit" className="btn btn-success" onClick={() => this.handleSelectState}>Look Up Groups</button>
              </Col>
            </Col>

      </div>
    
    );
  }
}

export default SearchBar;
