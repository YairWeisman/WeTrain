import React, { Component } from 'react';
import './FloatingButtons.css';
import { Collapse, Button, Tooltip, Popover, OverlayTrigger, Modal } from 'react-bootstrap';

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
    

    return (
      <div>
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Saved Trainers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                            {this.props.biz}
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
