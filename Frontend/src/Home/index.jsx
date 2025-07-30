import { useState } from 'react';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';

const Home = () => {
    const [refresh, setRefresh] = useState(false);

  return (
   <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#fa709a] to-[#fee140] bg-clip-text text-transparent">Job Board</h1>
      <div className="max-w-2xl mx-auto">
        <JobForm onJobPosted={() => setRefresh(!refresh)} />
        <JobList refresh={refresh} />
      </div>
    </div>
  )
}

export default Home
