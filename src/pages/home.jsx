import TextField from '@mui/material/TextField';
import MButton from '../components/global/MButton';
import { useEffect, useMemo, useState, useContext } from 'react';
import ListTask from '../components/ListTask';
import Sort from '@mui/icons-material/Sort';
import Search from '@mui/icons-material/Search';
import AddTask from '../components/addTask';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../constext';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskListThunk, setTaskThunk, updateTaskThunk } from '../store/tasks/api';

const Home = () => {
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState(false);
	const tasksList = useSelector((state) => state.tasksStore.tasks);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const setTheme = useContext(TaskContext);

	const filterText = useMemo(() => {
		const filter = tasksList.filter((t) => t.title.toLowerCase().includes(search));
		return !sort ? filter : filter.sort((a, b) => a.title.localeCompare(b.title));
	}, [search, tasksList, sort]);

	function setTaskInList(task) {
		dispatch(setTaskThunk(task));
	}
	function toggleTask(task) {
		dispatch(updateTaskThunk(task))
	}

	function openTask(id) {
		navigate(`task/${id}`);
	}
	useEffect(() => {
		loadData();
	}, []);

	function loadData() {
		dispatch(getTaskListThunk());
	}
	return (
		<div className="flex h-full w-full flex-col">
			<MButton onClick={() => setTheme()}>Сменить тему</MButton>
			<AddTask onAddTask={setTaskInList} />
			<div className="mt-3 flex">
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
			<ListTask lists={filterText} toggleTask={toggleTask} open={openTask} />
		</div>
	);
};

export default Home;
