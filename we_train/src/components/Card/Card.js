import React, { Component } from 'react';
import './Card.css';
import { Row, Col, Image } from 'react-bootstrap';
import Data from '../../data.json';

class BizCard extends Component {
	render() {
		return (
			<Row className="trainer-card">
				<Col md={2} className="trainer-pic">
					<Image src={this.props.imageUrl} circle />
				</Col>
				<Col md={10} className="trainer-info">
					<Row className="trainer-desc">
						<Col md={6}>
						<h3> Trainer Name </h3>
						</Col>
						<Col md={6}>
						{this.props.desctiption}
						<h3> Desctiption </h3>
						{this.props.desctiption}
						</Col>
					</Row>
					<Row className="training-details">
						<Col md={2} className="training-address">
							<h3> Address </h3>
							<Col md={10} className="value">{this.props.area}</Col>
						</Col>
						<Col md={2} className="training-days">
							<h3> Training Days </h3>
							<Col md={10} className="value">{this.props.days}</Col>
						</Col>
						<Col md={2} className="training-group-size">
							<h3> Group Size </h3>
							<Col md={10} className="value">{this.props.groupMaxSize}</Col>
						</Col>
						<Col md={2} className="training-price">
							<h3> Price Per Hour </h3>
							<Col md={10} className="value">{this.props.price}</Col>
						</Col>
						<Col md={2} className="training-dur">
							<h3> Session Duration </h3>
							<Col md={10} className="value">{this.props.duration}</Col>
						</Col>
						<Col md={2} className="training-deals-btn">
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}
class Card extends Component {

  	render() {
  			const trainers = Data.trainers;
			const activities = Data.activities;
			const gs = Data.group_size;
			const query = this.props.query;
			const filtered = trainers.map((trainer) => {
				var mutated = Object.assign({}, trainer);
				var sessions = trainer.sessions.filter((s) => {
					// console.log(activities[s.activity],query[0].activity);
					return (activities[s.activity] === query[0].activity || !query[0].activity) &&
						    (s.pricePerSession/s.duration*60 <= query[3].price || !query[3].price )&&
						    (s.groupMaxSize <= gs[query[2].group_size] || !gs[query[2].group_size])
				});
				mutated.sessions = sessions;
				return mutated;
			});

		const bizCards = filtered.map((trainer) => {
			var session = trainer.sessions.map((s) => {
				return <BizCard imageUrl={trainer.imageUrl}
						desctiption={trainer.desctiption}
						groupMaxSize={s.groupMaxSize}
						price={Math.floor(s.pricePerSession/s.duration*60)}
						duration={s.duration}/>
			});
			return session;
		});
		return (
			<div className="biz-cards">
				{bizCards}
			</div>
		);
	}
}




export default Card

