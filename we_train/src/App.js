import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';


class SelectionButton extends Component {

  constructor() {
      super();
      this.state = {
        selection:[],
        value: null
      };
    }

  componentDidMount() {     
      this.setState({ selection: this.props.selection, value: this.props.selectType });
  }

    render () {
        return (
          <Select name="selected-area" placeholder="Select Area" options={this.state.selection}
          simpleValue clearable={true}  disabled={false} />
        );
  }
}


class App extends Component {

  render() {
    var options = {
              areas:[{ value: 'Tel-Aviv', label: 'Tel-Aviv' },
                    { value: 'Herzlia', label: 'Herzlia' }],
              time_range: [{ value: '06:00-09:00', label: '06:00-09:00' },
                           { value: '09:00-12:00', label: '09:00-12:00' },
                           { value: '12:00-15:00', label: '12:00-15:00' },
                           { value: '15:00-18:00', label: '15:00-18:00' },
                           { value: '18:00-21:00', label: '18:00-21:00' },
                           { value: '21:00-24:00', label: '21:00-24:00' }]
  };
    return (
      <form>
        <h3 className="hello"> Select Area </h3>
        <SelectionButton selection={options.areas}/>
        <h3 className="hello"> Select Time Range </h3>
        <SelectionButton selection={options.time_range}/>
      </form>
    );
  }
}

export default App;
