import FieldLayout from "./FieldLayout";
import React from 'react';

class Field extends React.Component {
	render() {
		const { setField } = this.props;
		return <FieldLayout setField={setField} />;
	}
}

export default Field;