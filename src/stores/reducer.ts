import { combineReducers } from 'redux';

/* Individual Reducers */

import * as Trades from './trades/trades.reducer';

export interface State {
	trades: Trades.State;
}

const reducers = {
	trades: Trades.reducer
};

export const rootReducer = combineReducers(reducers);