import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Task from './pages/task';
import NotFound from './pages/404';
import BaseLayout from './layouts/BaseLayout';

const App = () => {
	return (
		<div>
			<div>Sait Random</div>
			<Routes>
				<Route element={<BaseLayout />}>
					<Route index element={<Home />} />
					<Route path="task/:id" element={<Task />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
