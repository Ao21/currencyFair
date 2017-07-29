import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AddTrade } from '../../stores/trades/trades.actions';

import * as moment from 'moment';

import { CurrencyOptions } from '../../core/contants/defaults';
import './trade-form.css';

interface Props {
	addTrade: (trade: any) => void;
}

interface State {
	currencyFrom?: string;
	currencyTo?: string;
	sell?: number;
	buy?: number;
	rate?: number;

	touched?: {
		from: boolean;
		to: boolean;
		sell: boolean;
		buy: boolean;
	};
}

function validate(sell: any, buy: any) {
	console.log(buy, buy < 2);
	return {
		sell: sell < 14.99,
		buy: buy < 2
	};
}
export default class TradeForm extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			currencyFrom: 'EUR',
			currencyTo: 'USD',
			sell: 0,
			buy: 0,
			rate: 0,
			touched: {
				from: false,
				to: false,
				sell: false,
				buy: false
			}
		};
	}

	handleInputEvent = (event: any) => {
		const target = event.target;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		if (this.state.sell && this.state.buy) {
			this.setState({
				rate: this.state.buy / this.state.sell
			});
		}

		this.setState({
			[name]: value
		});
	}

	handleSubmit = (event: any) => {
		const genericSettings = {
			userId: 34343,
			created: '24-JAN-15 10:27:44',
			originatingCountry: 'FR'
		};
		const update = Object.assign({}, this.state, genericSettings);
		console.log(update);
		this.props.addTrade(update);
	}

	render() {
		const errors = validate(this.state.sell, this.state.buy);
		
		const currencyOptions = CurrencyOptions.map((item, index) =>
			<option key={item.id} value={item.id}>
				{item.value}
			</option>
		);

		return (
			<form className="trade-form">
				<section>
					<div className="trade-form__group">
						<div className="trade-form__field">
							<label>From</label>
							<select
								name="currencyFrom"
								value={this.state.currencyFrom}
								onChange={this.handleInputEvent}
							>
								{currencyOptions}
							</select>
						</div>
						<div className="trade-form__field">
							<label>To</label>
							<select
								name="currencyTo"
								value={this.state.currencyTo}
								onChange={this.handleInputEvent}
							>
								{currencyOptions}
							</select>
						</div>
					</div>
					<div className="trade-form__group--horizontal">
						<div className="trade-form__field">
							<label>Sell</label>
							<input
								type="number"
								name="sell"
								className={errors.sell ? 'is-errored' : ''}
								value={this.state.sell}
								onChange={this.handleInputEvent}
							/>
						</div>
						<div className="trade-form__field">
							<label>Buy</label>
							<input
								type="number"
								name="buy"
								className={errors.buy ? 'is-errored' : ''}
								value={this.state.buy}
								onChange={this.handleInputEvent}
							/>
						</div>
					</div>
					<div className="trade-form__group">
						<h1>
							{this.state.rate}%
						</h1>
					</div>
				</section>
				<section>
					<button onClick={this.handleSubmit} type="button">submit</button>
				</section>
			</form>
		);
	}
}
