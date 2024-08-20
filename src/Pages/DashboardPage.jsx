import React from 'react'
import Dashboard from '../Components/DashboardPage/Dashboard'
import Navbar from '../Components/Common/Navbar'

function DashboardPage() {
  return (
    <div className='DashboardPage'>
        <Navbar/>
        <Dashboard/>
    </div>
  )
}

export default DashboardPage