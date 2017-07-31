import * as React from 'react';
import TradeItem from '../../elements/trade-item/trade-item';
import { Trade } from '../../../stores/trades/trade.model';
import { sortBy } from 'lodash';
import './trade-feed.css';

interface Props {
	trades: Trade[];
	rankings: {};
}

export default class TradeFeed extends React.Component<Props, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		let propTrades = [...this.props.trades];

		const isHidden = !this.props.trades.length;
		let cssClasses = `${isHidden ?  'is-hidden' : ''} trade-feed`;
		
		const rankings = Object.keys(
			this.props.rankings
		).sort((a: any, b: any) => {
			return this.props.rankings[b] - this.props.rankings[a];
			}).map(rank => {
				return (<li key={rank}>{rank}</li>);
			});

		const trades = propTrades.reverse().map((trade, i) => {
			if (i >= 3) {
				return;
			}
			return (
				<TradeItem
					key={i}	
					buy={trade.buy}
					sell={trade.sell}
					rate={trade.rate}
					currencyFrom={trade.currencyFrom}
					currencyTo={trade.currencyTo}
				/>
			);
		});

		return (
			<div className={cssClasses}>
				<h6>Top Trades</h6>
				<ol className="trade-feed__rankings">
					{rankings}
				</ol>	
				<h6>Latest</h6>
				{trades}
			</div>
		);
	}
}
