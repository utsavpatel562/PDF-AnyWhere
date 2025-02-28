"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import WorkSpaceHeader from './_components/WorkSpaceHeader';

function Workspace() {
    const {fileId} = useParams();
      
    return (
    <div>
        <WorkSpaceHeader/>
    </div>
  )
}

export default Workspace