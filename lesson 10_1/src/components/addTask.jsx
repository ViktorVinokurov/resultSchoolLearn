import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MButton from './global/MButton';

const AddTask = ({ onAddTask }) => {
	const INITIOAL_DATA = {
		title: '',
		description: '',
	};
	const [task, setTask] = useState(INITIOAL_DATA);
	function add() {
		onAddTask(task);
		setTask(INITIOAL_DATA);
	}
	return (
		<Card>
			<CardHeader title="Добавить задачу" />
			<CardContent className="flex">
				<TextField
					label="Наименование задачи"
					color="secondary"
					value={task.title}
					onChange={({ target }) => setTask({ ...task, title: target.value })}
				/>
				<TextField
					label="Описание задачи"
					color="secondary"
					className="ml-3!"
					value={task.description}
					onChange={({ target }) =>
						setTask({ ...task, description: target.value })
					}
				/>
				<MButton className="ml-4 h-auto" onClick={add}>
					добавить
				</MButton>
			</CardContent>
		</Card>
	);
};
export default AddTask;
