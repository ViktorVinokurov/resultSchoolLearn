import styles from './field.module.css';
import { connect } from 'react-redux';
import React from 'react';

class FieldLayout extends React.Component {
	render() {
		const { field, isGameEnded, setField } = this.props;
		return (
			<div className={styles.field}>
				{field.map((f, i) => (
					<div
						key={i}
						className={`${styles.card} ${!!f && `${styles[`card${f}`]} ${styles.disabled}`} ${isGameEnded && styles.disabled}`}
						onClick={() => setField(i)}
					></div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
});

export default connect(mapStateToProps)(FieldLayout);