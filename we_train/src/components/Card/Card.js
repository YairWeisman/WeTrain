import React, { Component } from 'react';
import './Card.css';
import { Row, Col, Image } from 'react-bootstrap';
import Data from '../../data.json';

class BizCard extends Component {
 constructor() {
    super();

    this.state = {
		lower: "hidden wrapper"
    };
  }

	render() {
		    console.log(this.props);
		return (
			<Row className="biz-card" >
				<Row className="trainer-card" onClick={() => {
					if (this.state.lower == "hidden wrapper") this.setState({lower: "visible wrapper"})
					else this.setState({lower: "hidden wrapper"})
				} }>
					<Col md={2} className="trainer-details">
						<Row md={2} className="trainer-pic">
							<Image src={this.props.imageUrl} circle className="picture"/>
						</Row>
						<Row md={10} className="trainer-name">
								{this.props.name}
						</Row>
					</Col>
					<Col md={10} className="training-details">
						<Row className="trainer-info">
							{this.props.desctiption}
						</Row>
						<Row className="trainer-info2">
							<Col md={2} className="training-address">
								<Row>
									<Col md={2} ><i className="material-icons md-18">room</i></Col>
									<Col md={10} className="value">{this.props.area}</Col>
								</Row>
							</Col>
							<Col md={2} className="training-days">
								<Row>
									<Col md={2} ><i className="material-icons md-18">today</i></Col>
									<Col md={10} className="value">{this.props.days}</Col>
								</Row>
							</Col>
							<Col md={2} className="training-group-size">
								<Row>
									<Col md={2} ><i className="material-icons md-18">group</i></Col>
									<Col md={10} className="value">{this.props.groupMaxSize}</Col>
								</Row>
							</Col>
							<Col md={2} className="training-price">
								<Row>
									<Col md={2} ><i className="material-icons md-18">attach_money</i></Col>
									<Col md={10} className="value">{this.props.price}</Col>
								</Row>
							</Col>
							<Col md={2} className="training-dur">
								<Row>
									<Col md={2} ><i className="material-icons md-18">query_builder</i></Col>
									<Col md={10} className="value">{this.props.duration}</Col>
								</Row>
							</Col>
							<Col>
								<Row>
									<Col md={2} ><i className="material-icons md-18">redeem</i><span className="deals">Deals</span></Col>
									<Col md={10} className="value"></Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className={this.state.lower}>
					<Col md={4} className="save-card">
						<button onClick={() => this.props.saveCard("this")} className="btn btn-deafault">Save Trainer</button>
					</Col>
					<Col md={4} className="contact">
						<button className="btn btn-deafault">{this.props.number}</button>
					</Col>
					<Col md={4} className="share">
						<button className="btn btn-deafault">Share</button>

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
						duration={s.duration}
						name={trainer.name}
						number={trainer.phoneNumber}
						saveCard={this.props.saveCard}/>
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

