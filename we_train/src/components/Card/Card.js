import React, { Component } from 'react';
import './Card.css';
import { Row, Col, Image } from 'react-bootstrap';
import Data from '../../data.json';

class BizCard extends Component {
	render() {
		return (
				<Row>
					<Row className="trainer-card">
						<Col md={2} className="trainer-pic">
							<Image src={this.props.imageUrl} circle />
						</Col>
						<Col md={10} className="trainer-info">
								{this.props.desctiption}
						</Col>
					</Row>
					<Row className="training-details">
						<Col md={2} className="training-address">
							<Col md={2} ><i className="material-icons md-18">room</i></Col>
							<Col md={10} className="value">{this.props.area}</Col>
						</Col>
						<Col md={2} className="training-days">
							<Col md={10} className="value">{this.props.days}</Col>
						</Col>
						<Col md={2} className="training-group-size">
							<Col md={10} className="value">{this.props.groupMaxSize}</Col>
						</Col>
						<Col md={2} className="training-price">
							<Col md={10} className="value">{this.props.price}</Col>
						</Col>
						<Col md={2} className="training-dur">
							<Col md={10} className="value">{this.props.duration}</Col>
						</Col>
						<Col md={2} className="training-deals-btn">
						</Col>
					</Row>
				</Row>
		);
	}
}
class Card extends Component {

  	render() {
  			const trainers = Data.trainers;
			const activities = Data.activities;
			const gs = Data.group_size;
			const areas = Data.areas;
			const query = this.props.query;
			const filtered = trainers.map((trainer) => {
				var mutated = Object.assign({}, trainer);
				var sessions = trainer.sessions.filter((s) => {
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
						area={areas[trainer.area-1]}
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

