import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import TradeItem from './trade-item';

describe('TradeItem', () => {
	let props: any;
	let mountedTradeItem: ReactWrapper<any, any> | undefined;
	const tradeItem = () => {
		if (!mountedTradeItem) {
			mountedTradeItem = mount(<TradeItem {...props} />);
		}
		return mountedTradeItem;
	};

	beforeEach(() => {
		props = {
			buy: 5,
			sell: 6,
			currencyFrom: 'EUR',
			currencyTo: 'USD',
			rate: 0.544343434
		};
		mountedTradeItem = undefined;
	});

	it('should render a trade item', () => {
		const divs = tradeItem().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});

	it('should show the currencys', () => {
		const header = tradeItem().find('header h6');
		expect(header.text()).toContain('EUR / USD');
	});

	it('should show the sell amount', () => {
		const sell = tradeItem().find('.sell h4');
		expect(sell.text()).toContain('6');
	});

	it('should show the buy amount', () => {
		const sell = tradeItem().find('.buy h4');
		expect(sell.text()).toContain('5');
	});

	it('should show the rate and limit it to four decimels', () => {
		const rate = tradeItem().find('.rate h4');
		expect(rate.text()).toContain('0.5443%');
	});

});
