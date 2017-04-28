import React, { Component } from 'react';
import './Header.css';
import { Row, Col, Image } from 'react-bootstrap';


class Header extends Component {
  	render() {
		return (
			<div className="main-header">
				<Row className="upper-bar">
					<Col lgOffset={10} lg={1} className="login-signup-btn align-right">LOGIN</Col>
					<Col lg={1} className="login-signup-btn">SIGN UP</Col>
				</Row>
				<Row className="main-logo">
					<Col lg={3} lgOffset={4} className="logo">WeTrain</Col>
				</Row>
				<Row className="main-sentence">
					<Col lg={6} lgOffset={3}>FIND YOUR PERFECT SPORT GROUP</Col>
				</Row>
			</div>
		);
	}
}


export default Header;
