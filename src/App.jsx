import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	function nextStep() {
		setActiveIndex((prev) => prev + 1)
	}
	function backStep() {
		setActiveIndex((prev) => prev - 1)
	}
	function beginStart() {
		setActiveIndex(0)
	}
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const isFirst = activeIndex === 0
	const isLast = activeIndex !== steps.length - 1

	function getSteps() {
		return steps.map((step, idx) => {
			const isActive = idx === activeIndex;
			const isDone = idx < activeIndex;
			const className =
				`${styles['steps-item']} ${isDone ? styles.done : ''} ${isActive ? styles.active : ''}`;
			return <li className={className} key={step.id}>
				<button className={styles['steps-item-button']} onClick={() => setActiveIndex(idx)}>{+step.id}</button>
				{step.title}
			</li>
		})
	}

	function getContent() {
		return steps[activeIndex].content
	}
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{getContent()}
					</div>
					<ul className={styles['steps-list']}>
						{getSteps()}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={backStep} disabled={isFirst}>Назад</button>
						{
							isLast ?
								<button className={styles.button} onClick={nextStep}>
									Далее
								</button>
								:
								<button className={styles.button} onClick={beginStart}>
									Начать заново
								</button>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App