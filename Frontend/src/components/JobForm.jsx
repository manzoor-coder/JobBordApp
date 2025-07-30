import { useState } from 'react';
import { postJob } from '../api';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

    const JobForm =({ onJobPosted }) => {
  const [formData, setFormData] = useState({ title: '', company: '', location: '', description: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postJob(formData);
    setFormData({ title: '', company: '', location: '', description: '' });
    onJobPosted();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow mb-4">
   <h1 className="text-xl text-center font-bold mb-3 bg-gradient-to-r from-[#fa709a] to-[#fee140] bg-clip-text text-transparent">
  Welcome to the Job Board Application
</h1>
      <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#fa709a] to-[#fee140] bg-clip-text text-transparent">Post a Job</h2>
      {['title', 'company', 'location', 'description'].map((field) => (
        <input key={field} name={field} placeholder={field} value={formData[field]} onChange={handleChange} className="block w-full mb-2 p-2 border rounded" required />
      ))}
      <div className='flex justify-end'>
        <Tooltip title="Post a Job" arrow placement='top'>
            <Button variant="contained" type="submit" className="bg-gradient-to-r from-[#fa709a] to-[#fee140] bg-clip bg-transparent text-white px-4 py-2 rounded" sx={{fontSize: '16px'}}>Post</Button>
        </Tooltip>
      </div>
      
    </form>
  );
}

export default JobForm