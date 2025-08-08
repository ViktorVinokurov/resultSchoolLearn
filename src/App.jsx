import { createElement, useState } from 'react';
import style from './App.module.css'

const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([])
	const [error, setError] = useState('')

	const errorText= <div className={style.error}>{error}</div>

	function onInputButtonClick() {
		const promptValue = prompt("Введите значение");
		if (promptValue.length >= 3) {
			setValue(promptValue)
			setError('')
		}
		else {
			setError('Введенное значение должно содержать минимум 3 символа')
		}
	}
	function onAddButtonClick() {
		if (!~list.findIndex((v) => v.value === value)) {
			setList((prev) => [...prev, {id:Date.now(), value}]);
			setValue('');
		} else {
			setError('Данное значение уже есть в списке!')
		}
	}

	function getList() {
		if (!list.length) return <p className={style.noMarginText}>Нет добавленных элементов</p>
		else return <ul className={style.list}>{list.map(({id, value}) => <li className={style.listItem} key={id}>{value}</li>)}</ul>
	}
	return (
		<div className={style.app}>
			<h1 className={style.pageHeading}>Ввод значения</h1>
			<p className={style.noMarginText}>
				Текущее значение <code>value</code>: "<output className={style.currentValue}>{value}</output>"
			</p>
			{error && errorText}
			<div className={style.buttonsContainer}>
				<button className={style.button} onClick={onInputButtonClick}>Ввести новое</button>
				<button className={style.button} disabled={!value} onClick={onAddButtonClick}>Добавить в список</button>
			</div>
			<div className={style.listContainer}>
				<h2 className={style.listHeading}>Список:</h2>
				{getList()}
			</div>
		</div>
	);
};
export default App