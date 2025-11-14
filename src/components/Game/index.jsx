import GameLayout from './GameLayout';
import { connect } from 'react-redux';
import React from 'react';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

class Game extends React.Component {
	checkWinner(field) {
		const win = WIN_PATTERNS.some(
			([a, b, c]) => field[a] && field[a] === field[b] && field[a] === field[c],
		);
		if (win) return 2;
		if (!win && field.filter((f) => !f).length === 0) return 1;
		return 0;
	}

	playerMove = (i) => {
		const { dispatch, currentPlayer, field } = this.props;
		const newField = field.map((cell, idx) =>
			idx === i ? currentPlayer : cell
		);
		dispatch({type: 'SET_FIELD', payload: {index:i, player: currentPlayer}});
		const isCheck = this.checkWinner(newField);

		if (isCheck !== 0) {
			dispatch({type: 'SET_GAME_END', payload: true});
			if (isCheck === 1) dispatch({type: 'SET_DRAW', payload: true});
		} else {
			dispatch({type: 'SET_CURRENT_PLAYER', payload: currentPlayer === 'X' ? '0' : 'X'});
		}
	}

	setRestart = () => {
		this.props.dispatch({type: 'RESTART_GAME'});
	}

	render() {
		return (
			<GameLayout
				setRestart={this.setRestart}
				setField={this.playerMove}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
	field: state.field,
});

export default connect(mapStateToProps)(Game);
