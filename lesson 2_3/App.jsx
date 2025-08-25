import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
	const actions = ['C', '=', '+', '-', '*', '/']
	const [numberOne, setNumerOne] = useState('')
	const [numberTwo, setNumerTwo] = useState('')
	const [operator, setOperator] = useState('')

	function setData(num) {
		if (operator) setNumerTwo((prev) => prev + num)
		else setNumerOne((prev) => prev + num)
	}
	function getKeyBoardNums() {
		const numbers = Array.from({ length: 10 }, (_, i) => i);
		numbers.push(numbers.shift());
		return numbers.map(num => <div className={styles.calculateItem} key={num} onClick={() => setData(num)}>{num}</div>);
	}
	function getAction() {
		return actions.map(act => <div className={styles.calculateItem} key={act} onClick={() => setAction(act)}>{act}</div>);
	}
	function setAction(act) {
		console.log(act);
		if (act === 'C') clearData()
		else if (act !== '=') setOperator(act);
		else {
			if (numberOne && numberTwo && operator) {
				setNumerOne(eval(`${+numberOne}${operator}${+numberTwo}`));
				setNumerTwo('');
				setOperator('');
			} else alert('Введите все значения')
		}
	}
	function clearData() {
		setNumerOne('');
		setNumerTwo('');
		setOperator('');
	}
	return (
		<div className={styles.calculate}>
			<div className={styles.calculateHeader}>
				<span className={styles.calculateHeaderText}>{numberOne}{operator}{numberTwo}</span>
			</div>
			<div className={styles.calculateContent}>
				<div className={styles.calculateContentNum}>{getKeyBoardNums()}</div>
				<div className={styles.calculateContentAction}>{getAction()}</div>
			</div>
		</div>
	);
};

export default App