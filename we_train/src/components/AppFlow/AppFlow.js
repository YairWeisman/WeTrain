import React, { Component } from 'react';
import './AppFlow.css';
import { Row, Col, Image } from 'react-bootstrap';


class AppFlow extends Component {
  	render() {
		return (
			<div className="main-app-flow">
				<Row className="how">
					<Col lgOffset={2} lg={8}>HOW DOES IT WORK?</Col>
				</Row>
				<Row className="flow-pics">
					<Col lgOffset={1} lg={3} className="stage1"></Col>
					<Col lg={3} className="stage2"></Col>
					<Col lg={3} className="stage3"></Col>
				</Row>
				<Row className="flow-text">
					<Col lgOffset={1} lg={3} className="stage1-desc"></Col>
					<Col lg={3} className="stage2-desc"></Col>
					<Col lg={3} className="stage3-desc"></Col>
				</Row>
			</div>
		);
	}
}


export default AppFlow;
