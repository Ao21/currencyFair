import * as React from 'react';
import { AddTrade } from '../../../stores/trades/trades.actions';

import * as moment from 'moment';

import { CurrencyOptions } from '../../../core/contants/defaults';
import { COUNTRY_NAME_LIST } from '../../../core/contants/country-list';
import './trade-form.css';

interface Props {
	addTrade: (trade: any) => void;
}

interface State {
	currencyFrom?: string;
	currencyTo?: string;
	originatingCountry: string;
	sell?: number;
	buy?: number;
	rate?: number;

	touched: {
		sell: boolean;
		buy: boolean;
	};
}

function validate(sell: any, buy: any) {
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
			originatingCountry: 'FR',
			touched: {
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

	handleBlur = (event: any) => {
		const target = event.target;
		const name = target.name;
		const touched = Object.assign({}, this.state.touched, {
			[name]: true
		});
		this.setState({
			touched: touched
		});
	}

	handleSubmit = (event: any) => {
		const genericSettings = {
			userId: 34343,
			created: moment().format('DD-MMM-YY hh:mm:ss')
		};
		const update = Object.assign({}, this.state, genericSettings);
		this.props.addTrade(update);
	}

	render() {
		const errors = validate(this.state.sell, this.state.buy);

		const currencyOptions = CurrencyOptions.map((item, index) =>
			<option key={item.id} value={item.id}>
				{item.value}
			</option>
		);

		const countryOptions = COUNTRY_NAME_LIST.sort((a: any, b: any) => {
			return a.country.localeCompare(b.country);
		}).map((item: any, index) =>
			<option key={item.idNumber} value={item.id}>
				{item.country}
			</option>
		);

		return (
			<form className="trade-form">
				<section className="trade-form__form">
					<div className="trade-form__group">
						<div id="currencyFromField" className="trade-form__field">
							<label>From</label>
							<select
								name="currencyFrom"
								value={this.state.currencyFrom}
								onChange={this.handleInputEvent}
							>
								{currencyOptions}
							</select>
						</div>
						<div id="currencyToField" className="trade-form__field">
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
						<div id="sellField" className="trade-form__field--horizontal">
							<label>Sell</label>
							<input
								type="number"
								name="sell"
								onBlur={this.handleBlur}
								className={errors.sell && this.state.touched.sell ? 'is-errored' : ''}
								value={this.state.sell}
								onChange={this.handleInputEvent}
							/>
						</div>
						<div id="buyField" className="trade-form__field--horizontal">
							<label>Buy</label>
							<input
								type="number"
								name="buy"
								onBlur={this.handleBlur}
								className={errors.buy && this.state.touched.buy ? 'is-errored' : ''}
								value={this.state.buy}
								onChange={this.handleInputEvent}
							/>
						</div>
						<div id="countryField" className="trade-form__field--horizontal">
							<label>Originating Country</label>
							<select
								name="originatingCountry"
								value={this.state.originatingCountry}
								onChange={this.handleInputEvent}
							>
								{countryOptions}
							</select>
						</div>
					</div>
				</section>
				<section className="trade-form__actions">
					<button
						id="saveButton"	
						disabled={errors.sell || errors.buy}
						onClick={this.handleSubmit}
						type="button"
					>
						Add
					</button>
				</section>
			</form>
		);
	}
}
