import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MButton from '../components/global/MButton';
import { DELTE_TASKS, GET_TASK } from '../service/api';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
const Task = () => {
	const INITIOAL_DATA = {
		title: '',
		description: '',
		finaly: false,
	};
	const navigate = useNavigate();

	const params = useParams();
	const [task, setTask] = useState(INITIOAL_DATA);
	const [colorStatus, setColorStatus] = useState('text-red-500');
	useEffect(() => {
		loadData();
	}, []);
	async function loadData() {
		setTask((await GET_TASK(params.id)).data);
	}
	async function deleteTask() {
		await DELTE_TASKS(task.id);
		navigate('/');
	}
    async function finalyTask() {
		await UPDATE_TASKS(task.id, { ...task, finaly: true });
		loadData();
	}
	useEffect(() => {
		setColorStatus(task.finaly ? 'text-green-500' : 'text-red-500');
	}, [task]);
	return (
		<Card>
			<CardHeader title={`Наименование задачи: ${task.title}`} />
			<CardContent>
				<div className={colorStatus}>
					{task.finaly ? 'Выполнена' : 'Не выполнена'}
				</div>
				<div>Описание: {task.description}</div>
			</CardContent>
			<CardActions>
				<MButton disabled={task.finaly} onClick={finalyTask}>Выполнено</MButton>
				<MButton onClick={deleteTask}>Удалить</MButton>
			</CardActions>
		</Card>
	);
};
export default Task;
