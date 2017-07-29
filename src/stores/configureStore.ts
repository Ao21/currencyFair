import { createStore } from 'redux';
import { rootReducer } from './reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default function configureStore(preloadedState: {}) {
	return createStore(rootReducer, preloadedState, devToolsEnhancer({}));
}
