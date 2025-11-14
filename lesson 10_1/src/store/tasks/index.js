import { createSlice } from '@reduxjs/toolkit';
import { getTaskListThunk, setTaskThunk, updateTaskThunk, deleteTaskThunk, getTaskThunk } from './api';

const initialState = {
	tasks: [],
    task: {},
};

export const taskSlce = createSlice({
	name: 'tasks',
	initialState,
	extraReducers: (builder) => {
        // чтение листа
		builder.addCase(getTaskListThunk.fulfilled, (state, action) => {
			state.tasks = action.payload;
		}),
		builder.addCase(getTaskListThunk.rejected, (state) => {
			state.tasks = initialState.tasks;
		});
        // чтение листа по id
		builder.addCase(getTaskThunk.fulfilled, (state, action) => {
			state.task = action.payload;
		}),
		builder.addCase(getTaskThunk.rejected, (state) => {
			state.tasks = initialState.task;
		});
        //добавление
		builder.addCase(setTaskThunk.fulfilled, (state, action) => {
			state.tasks.push(action.payload);
		});
		builder.addCase(setTaskThunk.rejected, () => {
			console.error('При записи произошла ошибка');
		});
        // обновление
		builder.addCase(updateTaskThunk.fulfilled, (state, action) => {
			const index = state.tasks.findIndex((t) => t.id === action.payload.id);
			if (!!~index) state.tasks[index] = action.payload;
		});
		builder.addCase(updateTaskThunk.rejected, () => {
			console.error('При обновлении произошла ошибка');
		});
        // удаление
		builder.addCase(deleteTaskThunk.fulfilled, (state, action) => {
			state.tasks = state.tasks.filter(task => task.id !== action.payload)
		});
		builder.addCase(deleteTaskThunk.rejected, () => {
			console.error('При удалении произошла ошибка');
		});
	},
});

export const { setTasks } = taskSlce.actions;
export default taskSlce.reducer;
