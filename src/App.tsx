import * as React from 'react';
import ShoppingList from './components/shopping-list/shopping-list';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
	render() {
		const listItems = ['Hello', 'Whatup'];
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.tsx</code> and save to
					reload.
				</p>
				<ShoppingList name="Hello" list={listItems} />
			</div>
		);
	}
}

export default App;
