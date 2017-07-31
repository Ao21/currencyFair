import * as React from 'react';
import './trade-item.css';

interface Props {
	buy: number;
	sell: number;
	currencyFrom: string;
	currencyTo: string;
	rate: number;

}
export default class TradeItem extends React.Component<Props, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (<article className="trade-item">
			<header>
				<h6><strong>{this.props.currencyFrom} / {this.props.currencyTo}</strong></h6>
			</header>
			<div className="trade-item__details">
				<div className="trade-item__detail buy">
					<h6>Buy</h6>
					<h4>{this.props.buy}</h4>
				</div>
				<div className="trade-item__detail sell">
					<h6>Sell</h6>
					<h4>{this.props.sell}</h4>
				</div>
				<div className="trade-item__detail rate">
					<h6>Rate</h6>
					<h4>{+this.props.rate.toFixed(4)}%</h4>
				</div>
			</div>
		</article>);
	}
}