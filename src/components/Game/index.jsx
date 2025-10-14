import { useState } from 'react';
import GameLayout from './GameLayout';
import { useDispatch, useSelector } from 'react-redux';

export default function Game() {
	const dispatch = useDispatch();
	const currentPlayer = useSelector(state => state.currentPlayer);
	const isGameEnded = useSelector(state => state.isGameEnded);
	const isDraw = useSelector(state => state.isDraw);
	const field = useSelector(state => state.field);
	// const [currentPlayer, setCurrentPlayer] = useState('X'); //x||0
	// const [isGameEnded, setIsGameEnded] = useState(false);
	// const [isDraw, setIsDraw] = useState(false);
	// const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

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

	async function playerMove(i) {

		const newField = field.map((cell, idx) =>
			idx === i ? currentPlayer : cell
		);
		dispatch({type: 'SET_FIELD', payload: {index:i, player: currentPlayer}});
		const isCheck = checkWinner(newField);

		if (isCheck !== 0) {
			dispatch({type: 'SET_GAME_END', payload: true});
			if (isCheck === 1) dispatch({type: 'SET_DRAW', payload: true});
		} else dispatch({type: 'SET_CURRENT_PLAYER', payload: currentPlayer === 'X' ? '0' : 'X'});
	}

	function checkWinner(field) {
		const win = WIN_PATTERNS.some(
			([a, b, c]) => field[a] && field[a] === field[b] && field[a] === field[c],
		);
		if (win) return 2;
		if (!win && field.filter((f) => !f).length === 0) return 1;
		return 0;
	}
	function setRestart() {
		dispatch({type: 'RESTART_GAME'})
	}
	return (
		<GameLayout
			setRestart={setRestart}
			setField={playerMove}
		/>
	);
}
