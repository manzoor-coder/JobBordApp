import { useEffect, useState } from 'react';
import { fetchJobs } from '../api';

const JobList = ({ refresh }) => {
    const [jobs, setJobs] = useState([]);

    console.log("jobs are: ", jobs)

    useEffect(() => {
        fetchJobs().then(res => setJobs(res.data));
    }, [refresh]);

    return (
        // <div className="grid gap-4 flex-1/2">
        //     {jobs.map(job => (
        //         <div key={job._id} className="bg-white p-4 rounded shadow">
        //             <h3 className="text-lg font-bold">{job.title}</h3>
        //             <p>{job.company} - {job.location}</p>
        //             <p className="text-sm text-gray-600">{job.description}</p>
        //             <p className="text-xs text-gray-500">Posted on: {new Date(job.postedAt).toLocaleDateString()}</p>
        //         </div>
        //     ))}
        // </div>


        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">

            {/* Demo content to show sticky behavior */}
            <div className="pt-16">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Dream Job</h1>
                        <p className="text-xl text-gray-600 mb-8">Discover thousands of job opportunities from top companies</p>
                    </div>

                    {/* Demo sections to enable scrolling */}
                   {jobs.map(job => (
                        <div key={job._id} className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Job Section </h2>
                            <p className='text-gray-600 mb-4'>Posted on: {new Date(job.postedAt).toLocaleDateString()}</p>
                            <p className="text-gray-600 mb-4">
                                {job.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">{job.title}</h3>
                                    <p className="text-gray-600 text-sm">{job.company} • {job.location} • $80k-120k</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Backend Engineer</h3>
                                    <p className="text-gray-600 text-sm">Startup • San Francisco • $90k-140k</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default JobList