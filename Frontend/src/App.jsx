import JobForm from "./components/JobForm";
import Navbar from "./components/Navbar"
// import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import JobList from "./components/JobList";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<JobList />} />         {/* / => JobList page */}
          <Route path="jobpost" element={<JobForm />} /> {/* /jobpost => JobForm */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
