import TextField from '@mui/material/TextField';
import MButton from '../components/global/MButton';
import { useEffect, useMemo, useState } from 'react';
import ListTask from '../components/ListTask';
import Sort from '@mui/icons-material/Sort';
import Search from '@mui/icons-material/Search';
import AddTask from '../components/addTask';
import { useNavigate } from 'react-router-dom';
import { GET_TASKS, SET_TASKS, UPDATE_TASKS } from '../service/api';

const Home = () => {
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState(false);
	const [tasksList, setTasksList] = useState([]);
	const navigate = useNavigate();

	const filterText = useMemo(() => {
		const filter = tasksList.filter((t) => t.title.toLowerCase().includes(search));
		return !sort ? filter : filter.sort((a, b) => a.title.localeCompare(b.title));
	}, [search, tasksList, sort]);

	async function setTaskInList(task) {
		await SET_TASKS(task);
		loadData();
	}
	async function toggleTask(task) {
		await UPDATE_TASKS(task.id, task);
		loadData();
	}

	function openTask(id) {
		navigate(`task/${id}`);
	}
	useEffect(() => {
		loadData();
	}, []);

	async function loadData() {
		setTasksList((await GET_TASKS()).data);
	}
	return (
		<div className="flex h-full w-full flex-col">
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
			<ListTask
				lists={filterText}
				toggleTask={toggleTask}
				open={openTask}
			/>
		</div>
	);
};

export default Home;
