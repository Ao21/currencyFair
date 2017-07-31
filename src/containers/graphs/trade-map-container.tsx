import TradeMap from '../../components/features/trade-map/trade-map';
import { State } from '../../stores/reducer';
import { getAllTrades } from '../../stores/trades/trades.reducer';

import { TradeAction } from '../../stores/trades/trades.actions';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ trades }: State) {
	return {
		trades: getAllTrades(trades)
	};
}

export function mapDispatchToProps(dispatch: Dispatch<TradeAction>) {
	return {};
}

export function mergeProps(
	stateProps: Object,
	dispatchProps: Object,
	ownProps: Object
) {
	return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TradeMap);
