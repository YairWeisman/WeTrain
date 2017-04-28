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
					<Col lgOffset={1} lg={10} className="stage1"></Col>
				</Row>
			</div>
		);
	}
}


export default AppFlow;
