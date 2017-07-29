import * as React from 'react';
import { Provider } from 'react-redux';

import ShoppingList from './components/shopping-list/shopping-list';
import TradeForm from './containers/forms/trade-form.container';
import configureStore from './stores/configureStore';
import './App.css';

const logo = require('./logo.svg');

const store = configureStore({});

class App extends React.Component<{}, {}> {
	render() {
		const listItems = ['Hello', 'Whatup'];
		return (
			<Provider store={store}>
				<div className="App">
					<div className="App-header">
						<TradeForm />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
