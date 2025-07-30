import { useEffect, useState } from 'react';
import { fetchJobs } from '../api';

const JobList = ({ refresh }) => {
    const [jobs, setJobs] = useState([]);

    console.log("jobs are: ", jobs)

    useEffect(() => {
        fetchJobs().then(res => setJobs(res.data));
    }, [refresh]);

    return (
        <div className="grid gap-4 flex-1/2">
            {jobs.map(job => (
                <div key={job._id} className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p>{job.company} - {job.location}</p>
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <p className="text-xs text-gray-500">Posted on: {new Date(job.postedAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}


export default JobList