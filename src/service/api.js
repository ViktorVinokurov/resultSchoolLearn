import axios from "axios";

export const GET_TASKS = () => axios.get('/tasks');
export const GET_TASK = (id) => axios.get('/tasks/'+id);
export const SET_TASKS = (data) => axios.post('/tasks', data);
export const UPDATE_TASKS = (id, data) => axios.put('/tasks/'+id, data);
export const DELTE_TASKS = (id) => axios.delete('/tasks/'+id);