import Game from './components/Game';
import store from './store';
import { Provider } from 'react-redux';
import React from 'react';

class App extends React.Component {
	render() {
		return <Provider store={store}><Game /></Provider>
	}
}

export default App;
