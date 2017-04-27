import React, { Component } from 'react';
import './Card.css';
import { Row, Col, Image } from 'react-bootstrap';


class Card extends Component {
  	render() {
		return (
			<Row className="trainer-card">
				<Col md={2} className="trainer-pic">
					{/*<Image src="../resources/logo.png" circle />*/}
				</Col>
				<Col md={12} className="trainer-info">
					<Row className="trainer-desc">
						Bla bla bla
					</Row>
					<Row className="training-details">
						<Col md={2} className="training-address">
							{/*<Col md={2}><Image src="../resources/______-logo.png" circle /></Col>*/}
							<Col md={10} className="value"></Col>
						</Col>
						<Col md={2} className="training-days">
							{/*<Col md={2}><Image src="../resources/______-logo.png" circle /></Col>*/}
							<Col md={10} className="value"></Col>
						</Col>
						<Col md={2} className="training-group-size">
							{/*<Col md={2}><Image src="../resources/______-logo.png" circle /></Col>*/}
							<Col md={10} className="value"></Col>
						</Col>
						<Col md={2} className="training-price">
							{/*<Col md={2}><Image src="../resources/______-logo.png" circle /></Col>*/}
							<Col md={10} className="value"></Col>
						</Col>
						<Col md={2} className="training-dur">
							{/*<Col md={2}><Image src="../resources/______-logo.png" circle /></Col>*/}
							<Col md={10} className="value"></Col>
						</Col>
						<Col md={2} className="training-deals-btn">
						</Col>

					</Row>
				</Col>
			</Row>
		);
	}
}


export default Card

