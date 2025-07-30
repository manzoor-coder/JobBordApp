import { useState } from 'react';
import { postJob } from '../api';

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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
    <h1 className='text-xl text-center font-bold mb-3'>Welcom to the Job Bord Application</h1>
      <h2 className="text-xl font-semibold mb-3">Post a Job</h2>
      {['title', 'company', 'location', 'description'].map((field) => (
        <input key={field} name={field} placeholder={field} value={formData[field]} onChange={handleChange} className="block w-full mb-2 p-2 border rounded" required />
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
}

export default JobForm