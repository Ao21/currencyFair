import { TradeAction, ADD_TRADE, ActionTypes } from './trades.actions';
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
	action: TradeAction
): State {
	switch (action.type) {
		case ActionTypes.LOAD:
			return Object.assign({}, state, {
				loading: true
			});
		case ActionTypes.ADD:
			console.log(action);	
			return Object.assign({}, state, {
				entities: [...state.entities, action.payload]
			});	
		default: {
			return state;
		}
	}
}