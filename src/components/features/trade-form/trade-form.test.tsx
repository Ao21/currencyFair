import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import TradeForm from './trade-form';

describe('TradeItem', () => {
	let props: any;
	let mountedTradeForm: ReactWrapper<any, any> | undefined;
	const tradeForm = () => {
		if (!mountedTradeForm) {
			mountedTradeForm = mount(<TradeForm {...props} />);
		}
		return mountedTradeForm;
	};

	beforeEach(() => {
		props = {
			addTrade: jest.fn()
		};
		mountedTradeForm = undefined;
	});

	it('should render a trade item', () => {
		const divs = tradeForm().find('div');
		expect(divs.length).toBeGreaterThan(0);
	});

	describe('defaults', () => {
		it('should have default values for currencyFrom', () => {
			const currencyFormField = tradeForm().find(
				'#currencyFromField select'
			);
			expect(currencyFormField.props().value).toBe('EUR');
		});

		it('should have default values for currencyTo', () => {
			const currencyFormField = tradeForm().find(
				'#currencyToField select'
			);
			expect(currencyFormField.props().value).toBe('USD');
		});

		it('should have default values for originatingCountry', () => {
			const currencyFormField = tradeForm().find('#countryField select');
			expect(currencyFormField.props().value).toBe('FR');
		});
	});

	describe('activity', () => {
		
		it('should be able to save a trade', () => {
			const button = tradeForm().find('#saveButton');
			expect(button.html().includes('disabled="')).toBeTruthy();

			const sellField = tradeForm().find('#sellField input');
			sellField.simulate('change', { target: { name: 'sell', value: 25 } });

			const buyField = tradeForm().find('#buyField input');
			sellField.simulate('change', { target: { name: 'buy', value: 28 } });

			expect(button.html().includes('disabled="')).toBeFalsy();

			expect(props.addTrade.mock.calls.length).toBe(0);

			button.simulate('click');

			expect(props.addTrade.mock.calls.length).toBe(1);
		});
	});

});
