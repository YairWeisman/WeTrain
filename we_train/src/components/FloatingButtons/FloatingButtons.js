import React, { Component } from 'react';
import './FloatingButtons.css';
import { Collapse, Button, Tooltip, Popover, OverlayTrigger, Modal } from 'react-bootstrap';
import Card, {BizCard} from '../Card/Card.js';
import createFragment from 'react-addons-create-fragment';

class FloatingButtons extends Component {
  constructor() {
    super();
    this.state = {
      showModal : false
    };
    this.handleClose = this.handleClose.bind(this); 
    this.handleOpen = this.handleOpen.bind(this); 

  }
  
  handleClose() {
    this.setState({ showModal: false });
  }

  handleOpen() {
    this.setState({ showModal: true });
  }
  render() {
    const b = <BizCard/>
    if (this.props.biz.length > 0){
    var a = <BizCard {...this.props.biz[0].props} />
    console.log (a,b)
    }
    else {
      var a = null
    };
    //const children = createFragment({"first": a});                   
    return (
      <div>
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Saved Trainers</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
             children
              {a}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>

      	<div className="floatings">
            <span onClick={this.handleOpen}>
              <i className="floating material-icons md-48 star">stars</i>
            </span>
              <div className="circle" onClick={() => window.scrollTo(0, 0)}>
              <span><i className="floating material-icons md-48 up1">expand_less</i></span>
              <span><i className="floating material-icons md-48 up2">expand_less</i></span>
            </div>
        </div>
    	</div>
    );
  }
}

export default FloatingButtons;
