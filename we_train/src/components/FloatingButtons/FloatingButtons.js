import React, { Component } from 'react';
import './FloatingButtons.css';
import { Collapse, Button, Tooltip, Popover, OverlayTrigger, Modal } from 'react-bootstrap';

class FloatingButtons extends Component {
  constructor() {
    super();
    this.state = {
      showModal : false
    };
  }
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <div>
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Saved Trainers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>

      	<div className="floatings">
            <span onClick={this.open}>
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
