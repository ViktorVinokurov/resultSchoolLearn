import { useState } from 'react';
import GameLayout from './GameLayout';

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X'); //x||0
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);



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
		await setField((arr) => {
			arr[i] = currentPlayer;
			return arr;
		});
    const isCheck = checkWinner(field);

    if (isCheck !== 0) {
      setIsGameEnded(true)
      if (isCheck === 1) setIsDraw(true)
    } else setCurrentPlayer((c) => (c === 'X' ? '0' : 'X'));
	}

  function checkWinner(field) {
    const win = WIN_PATTERNS.some(([a, b, c]) => 
      field[a] && field[a] === field[b] && field[a] === field[c]
    );
    if (win) return 2
    if (!win && field.filter(f => !f).length === 0) return 1
    return 0
  }
  function setRestart() {
    setIsDraw(false)
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setField(['', '', '', '', '', '', '', '', ''])
  }
	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
      setRestart={setRestart}
			setField={playerMove}
		/>
	);
}
