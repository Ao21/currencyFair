import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Trade } from '../../../stores/trades/trade.model';
import TradeFeed from './trade-feed';

describe('TradeFeed', () => {
	let props: any;
	let mountedTradeFeed: ReactWrapper<any, any> | undefined;
	const tradeFeed = () => {
		if (!mountedTradeFeed) {
			mountedTradeFeed = mount(<TradeFeed {...props} />);
		}
		return mountedTradeFeed;
	};

	beforeEach(() => {
		const trade = new Trade({
			currencyFrom: 'EUR',
			currencyTo: 'USD',
			sell: 25,
			buy: 28,
			rate: 0,
			originatingCountry: 'FR',
			userId: 34343,
			created: '31-Jul-17 10:37:55'
		});
		props = {
			trades: [trade, trade, trade],
			rankings: {
				'EUR/USD': 1,
				'USD/EUR': 2
			}
		};
		mountedTradeFeed = undefined;
	});

	it('should render a trade feed', () => {
		const divs = tradeFeed().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});

	it('should show the rankings in the correct order', () => {
		const rankings = tradeFeed().find('.trade-feed__rankings ol li');
		expect(rankings.first().text()).toContain('USD/EUR');
		expect(rankings.last().text()).toContain('EUR/USD');
	});

	it('should show the a list of trades', () => {
		const trades = tradeFeed().find('TradeItem');
		expect(trades.length).toBe(3);
	});

	it('should be hidden if there are no trades', () => {
		const trades = tradeFeed().setProps({ trades: [] });
		expect(trades.first().hasClass('is-hidden')).toBeTruthy();
	});

});
