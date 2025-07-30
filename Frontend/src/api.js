import axios from 'axios';

const API = axios.create();

export const fetchJobs = () => API.get('/jobs');
export const postJob = (newJob) => API.post('/jobs', newJob);
