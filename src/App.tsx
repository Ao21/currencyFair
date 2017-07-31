import * as React from 'react';
import { Provider } from 'react-redux';

import TradeMap from './containers/graphs/trade-map-container';
import TradeForm from './containers/forms/trade-form.container';
import TradeFeed from './containers/graphs/trade-feed-container';

import configureStore from './stores/configureStore';
import './App.css';

const logo = require('./logo.svg');

const store = configureStore({});

class App extends React.Component<{}, {}> {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<TradeMap />
					<TradeFeed />
					<TradeForm />
				</div>
			</Provider>
		);
	}
}

export default App;
