import { Action } from 'redux';

export const ActionTypes = {
	LOAD: '[TRADES] Load Trades',
	ADD: '[TRADES] Add Trades',

};

export class LoadTrades implements Action {
	type = ActionTypes.LOAD;
	constructor(public payload: {}) {
	}
}

export class AddTrade implements Action {
	type = ActionTypes.ADD;
	constructor(public payload: {}) {
	}
}

export type Actions
	= LoadTrades
	| AddTrade;