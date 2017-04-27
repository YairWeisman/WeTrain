import React, { Component } from 'react';
import './SearchBar.css';
import Select from 'react-select';
import {FormControl}from 'react-bootstrap';


class SelectionButton extends Component {

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
       <form className="form-inline">
          
            <h3 className="hello"> Select Activity </h3>
            <SelectionButton selection={options.areas}/>
            <h3 className="hello"> Select Area </h3>
            <SelectionButton selection={options.areas}/>
            <h3 className="hello"> Select Time Range </h3>
            <SelectionButton selection={options.group_size}/>
            <h3 className="hello"> Select Time Range </h3>
            <FormControl
            type="text" placeholder="Enter text" onChange={this.handleChange}/>
          <button className="btn btn-success pull-right">Look Up Groups</button>
       </form>
    );
  }
}

export default SearchBar;
