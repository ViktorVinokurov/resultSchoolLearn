import styles from './information.module.css';
import { connect } from 'react-redux';
import React from 'react';

class InformationLayout extends React.Component {
	render() {
		const { isDraw, isGameEnded, currentPlayer, setRestart } = this.props;
		return (
			<div className={styles.info}>
				{isDraw && <span>Ничья</span>}
				{(!isDraw && isGameEnded) && <span>Попеда <b>{currentPlayer}</b></span>}
				{(!isDraw && !isGameEnded) && <span>Ход <b>{currentPlayer}</b></span>}
				<button className={styles.button} onClick={setRestart}>Начать заново</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export default connect(mapStateToProps)(InformationLayout);