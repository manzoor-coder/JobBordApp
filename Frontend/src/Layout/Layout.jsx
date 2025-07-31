import { } from 'react'
import JobList from '../components/JobList'
import JobForm from '../components/JobForm'
import Navbar from '../components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout


{/* <JobForm onJobPosted={() => setRefresh(!refresh)} /> */ }
{/* <JobList /> */ }