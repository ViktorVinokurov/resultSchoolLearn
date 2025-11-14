import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loader';
import taskReducer from './tasks';

const store = configureStore({
	reducer: {
		loaderStore: loaderReducer,
		tasksStore: taskReducer,
	},
});

export default store;
