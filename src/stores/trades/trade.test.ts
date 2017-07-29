import { Trade } from './trade.model';
import * as moment from 'moment';

/**
 * Trade Constructor Tests
 */

it('should be able to create a trade', () => {
	const data = {
		userId: 7868723,
		currencyFrom: 'EUR',
		currencyTo: 'EUR',
		sell: 14.99,
		buy: 2,
		rate: 0.74545,
		created: '24-JAN-15 10:27:44',
		originatingCountry: 'FR'
	};
	const testTrade = new Trade(data);
	expect(testTrade).toBeInstanceOf(Trade);
	expect(typeof testTrade.buy).toBe('number');
	expect(typeof testTrade.sell).toBe('number');
	expect(typeof testTrade.userId).toBe('number');
	expect(typeof testTrade.rate).toBe('number');
	expect(testTrade.created).toBeInstanceOf(moment);
	expect(typeof testTrade.originatingCountry).toBe('string');
});

it('shouldnt accept a trade with an unknown country code', () => {
	const data = {
		userId: 7868723,
		currencyFrom: 'EUR',
		currencyTo: 'EUR',
		sell: 14.99,
		buy: 2,
		rate: 0.74545,
		created: '24-JAN-15 10:27:44',
		originatingCountry: 'BLAH'
	};

	expect(() => {
		const test = new Trade(data);
	}).toThrow('This is not a supported country code');
});

it('shouldnt accept a trade with an unknown currency code', () => {
	const data = {
		userId: 7868723,
		currencyFrom: 'KLM',
		currencyTo: 'EUR',
		sell: 14.99,
		buy: 2,
		rate: 0.74545,
		created: '24-JAN-15 10:27:44',
		originatingCountry: 'BLAH'
	};

	expect(() => {
		const test = new Trade(data);
	}).toThrow('This is not a supported currency');
});

it('shouldnt accept a trade with an invalid date', () => {
	const data = {
		userId: 7868723,
		currencyFrom: 'EUR',
		currencyTo: 'EUR',
		sell: 14.99,
		buy: 2,
		rate: 0.74545,
		created: 'dfgdfgf',
		originatingCountry: 'BLAH'
	};

	expect(() => {
		const test = new Trade(data);
	}).toThrow('Not a valid date');
});

it('shouldnt accept an invalid id', () => {
	const data = {
		userId: 'dfgfdg',
		currencyFrom: 'EUR',
		currencyTo: 'EUR',
		sell: 14.99,
		buy: 2,
		rate: 0.74545,
		created: '24-JAN-15 10:27:44',
		originatingCountry: 'FR'
	};

	expect(() => {
		const test = new Trade(<any> data);
	}).toThrow('Not a valid id');
});