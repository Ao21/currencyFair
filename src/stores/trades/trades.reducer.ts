import * as Trades from './trades.actions';
import { Trade } from './trade.model';

export interface State {
	loaded: boolean;
	loading: boolean;
	entities: Trade[];
}

const initialState: State = {
	loaded: false,
	loading: false,
	entities: []
};

export function reducer(
	state: State = initialState,
	action: Trades.Actions
): State {
	switch (action.type) {
		case Trades.ActionTypes.LOAD:
			return Object.assign({}, state, {
				loading: true
			});
		case Trades.ActionTypes.ADD:
			return Object.assign({}, state, {
				entities: [...state.entities, action.payload]
			});	
		default: {
			return state;
		}
	}
}