import Information from "./Information";
import Field from "./Field";
import React from 'react';

class GameLayout extends React.Component {
	render() {
		const { setRestart, setField } = this.props;
		return (
			<>
				<Information setRestart={setRestart} />
				<Field setField={setField} />
			</>
		);
	}
}

export default GameLayout;