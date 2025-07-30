import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5173' });

export const fetchJobs = () => API.get('/jobs');
export const postJob = (newJob) => API.post('/jobs', newJob);
