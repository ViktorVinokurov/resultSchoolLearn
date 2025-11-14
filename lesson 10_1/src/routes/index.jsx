import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import Home from '../pages/home';
import Task from '../pages/task';
import NotFound from '../pages/404';
const routes = [
	{
		path: '/',
		element: <BaseLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'task/:id',
				element: <Task />,
			},
			{ path: '*', element: <NotFound /> },
		],
	},
	{ path: '*', element: <NotFound /> },
];

export const router = createBrowserRouter(routes);
