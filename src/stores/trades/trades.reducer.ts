import { TradeAction, ADD_TRADE, ActionTypes } from './trades.actions';
import { Trade } from './trade.model';

export interface State {
	loaded: boolean;
	loading: boolean;
	entities: Trade[];
	rankings: any;
}

const initialState: State = {
	loaded: false,
	loading: false,
	entities: [],
	rankings: {}
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
			const rankingUpdate = `${action.payload.currencyFrom}/${action
				.payload.currencyTo}`;
			return Object.assign({}, state, {
				rankings: Object.assign({}, state.rankings, {
					[rankingUpdate]: state.rankings[rankingUpdate]
						? state.rankings[rankingUpdate] + 1
						: 1
				}),
				entities: [...state.entities, action.payload]
			});
		default: {
			return state;
		}
	}
}

export const getAllTrades = (state: State) => {
	return state.entities;
};

export const getAllRankings = (state: State) => {
	return state.rankings;
};