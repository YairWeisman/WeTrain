import React, { Component } from 'react';
import './FloatingButtons.css';

class FloatingButtons extends Component {

  render() {
    return (
    	<div>
          <span><i className="material-icons md-48 star">stars</i></span>
          <div className="circle" onClick={() => window.scrollTo(0, 0)}>
            <span><i className="material-icons md-48 up1">expand_less</i></span>
            <span><i className="material-icons md-48 up2">expand_less</i></span>
          </div>
    	</div>
    );
  }
}

export default FloatingButtons;
