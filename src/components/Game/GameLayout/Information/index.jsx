import InformationLayout from "./InformationLayout";
import React from 'react';

class Information extends React.Component {
	render() {
		return <InformationLayout {...this.props} />;
	}
}

export default Information;