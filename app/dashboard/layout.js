import React from 'react'
import SideBar from "./_components/SideBar"

function DashboardLayout({children}) {
  return (
    <>
    <div>
        <div className='w-64 h-screen fixed'>
            <SideBar/>
        </div>
        <div className='ml-64'>
            {children}
        </div>
    </div>
    </>
  )
}

export default DashboardLayout