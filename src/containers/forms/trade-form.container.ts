import TradeForm from '../../components/features/trade-form/trade-form';
import { addTrade, TradeAction } from '../../stores/trades/trades.actions';

import { Trade } from '../../stores/trades/trade.model';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(dispatch: Dispatch<TradeAction>) {
	return {};
}

export function mapDispatchToProps(dispatch: Dispatch<TradeAction>) {
	return {
		addTrade: (trade: any) => dispatch(addTrade(new Trade(trade)))
	};
}

export function mergeProps(
	stateProps: Object,
	dispatchProps: Object,
	ownProps: Object
) {
	return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
	TradeForm
);
