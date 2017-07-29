import { Action } from 'redux';

export const LOAD_TRADE = '[TRADES] Load Trade';
export type LOAD_TRADE = typeof LOAD_TRADE;

export const ADD_TRADE = '[TRADES] Add Trade';
export type ADD_TRADE = typeof ADD_TRADE;

export const ActionTypes = {
	LOAD: LOAD_TRADE,
	ADD: ADD_TRADE
};

export interface LoadTrade {
	type: LOAD_TRADE;
	payload: any;
}

export interface AddTrade {
	type: ADD_TRADE;
	payload: any;
}

export type TradeAction = LoadTrade | AddTrade;

export function loadTrade(payload: any): LoadTrade {
	return {
		type: LOAD_TRADE,
		payload: payload
	};
}

export function addTrade(payload: any): AddTrade {
	return {
		type: ADD_TRADE,
		payload: payload
	};
}
