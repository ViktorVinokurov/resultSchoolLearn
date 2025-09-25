import TextField from '@mui/material/TextField';
import MButton from './components/global/MButton';
import { useEffect, useMemo, useState } from 'react';
import FirebaseDB from './utiles/db';
import ListTask from './components/ListTask';
import Sort from '@mui/icons-material/Sort';
import Search from '@mui/icons-material/Search';
const App = () => {
	const [task, setTask] = useState('');
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState(false);
	const [tasksList, setTasksList] = useState([]);
	const todoList = new FirebaseDB('todos');

	const filterText = useMemo(() => {
		const filter = tasksList.filter((t) => t.task.toLowerCase().includes(search));
		return !sort ? filter : filter.sort((a, b) => a.task.localeCompare(b.task));
	}, [search, tasksList, sort]);

	function setTaskInList() {
		todoList.push({
			task,
			finaly: false,
		});
		setTask('');
	}
	function toggleTask({ id, task, finaly }) {
		todoList.update(id, {
			task,
			finaly: !finaly,
		});
	}

	function deleteTask(id) {
		todoList.delete(id);
	}

	useEffect(() => {
		return todoList.changeData(setTasksList);
	}, []);

	return (
		<div className="flex h-full w-full flex-col">
			<div className="mt-8 flex m-auto">
				<TextField
					label="Наименование задачи"
					color="secondary"
					value={task}
					onChange={({ target }) => setTask(target.value)}
				/>
				<MButton className="ml-4 h-auto" onClick={setTaskInList}>
					добавить
				</MButton>
			</div>
			<div className="mt-3 flex m-auto">
				<TextField
					label="поиск задачи"
					color="secondary"
					slotProps={{
						input: {
							startAdornment: <Search />,
						},
					}}
					value={search}
					onChange={({ target }) => setSearch(target.value)}
				/>
				<MButton className="ml-4 h-auto" onClick={() => setSort((s) => !s)}>
					<Sort style={{ transform: `rotate(${sort ? '180deg' : '0'})` }} />
				</MButton>
			</div>
			<ListTask
				lists={filterText}
				deleteTask={deleteTask}
				toggleTask={toggleTask}
			/>
		</div>
	);
};

export default App;
