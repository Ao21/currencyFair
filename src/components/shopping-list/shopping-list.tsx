import * as React from 'react';

interface Props {
	name?: string;
	list?: string[];
}

interface State {
	list: string[];
}

export default class ShoppingList extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { list: props.list as string[] };
	}

	handleClick = () => {
		this.setState((prevState, props) => ({
			list: [...prevState.list, 'Hellooood']
		}));
	}

	render() {
		const { name = 'John' } = this.props;
		const listItems = this.state.list.map(item => (
			<li key={item}>
				{item}
			</li>
		));
		return (
			<div className="shopping-list">
				<h1 className="name">
					Shopping List for {name}
				</h1>
				<ul>
					{listItems}
				</ul>

				<button onClick={this.handleClick}>Add Item</button>
			</div>
		);
	}
}
