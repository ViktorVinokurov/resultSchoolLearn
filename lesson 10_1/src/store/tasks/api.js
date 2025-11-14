import { createAsyncThunk } from "@reduxjs/toolkit";
import { DELTE_TASKS, GET_TASKS, SET_TASKS, UPDATE_TASKS,GET_TASK } from "../../service/api";

export const getTaskListThunk = createAsyncThunk('tasks/get', async () => {
    const responce = await GET_TASKS()
    if (responce.status === 200) return responce.data;
})
export const getTaskThunk = createAsyncThunk('tasks/getById', async (id) => {
    const responce = await GET_TASK(id)
    if (responce.status === 200) return responce.data;
})
export const setTaskThunk = createAsyncThunk('tasks/set', async (task) => {
    const responce = await SET_TASKS(task)
    if (responce.status === 200) {
        return responce.data
    }
})
export const updateTaskThunk = createAsyncThunk('tasks/put', async (task) => {
    const responce = await UPDATE_TASKS(task.id, task)
    if (responce.status === 200) {
        return responce.data
    }
})
export const deleteTaskThunk = createAsyncThunk('tasks/delete', async (id) => {
    const responce = await DELTE_TASKS(id)
    if (responce.status === 200) {
        return id;
    }
})
