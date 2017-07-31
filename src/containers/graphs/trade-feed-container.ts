import TradeFeed from '../../components/features/trade-feed/trade-feed';
import { State } from '../../stores/reducer';
import { getAllTrades, getAllRankings } from '../../stores/trades/trades.reducer';

import { TradeAction } from '../../stores/trades/trades.actions';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ trades }: State) {
	return {
		trades: getAllTrades(trades),
		rankings: getAllRankings(trades)
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TradeFeed);
