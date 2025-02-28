"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import WorkSpaceHeader from './_components/WorkSpaceHeader';

function Workspace() {
    const {fileId} = useParams();
      
    return (
    <div>
        <WorkSpaceHeader/>
        <div>
            <div>
                {/* Text Editor */}
            </div>
            <div>
                {/* PDF Viewer */}
            </div>
        </div>
    </div>
  )
}

export default Workspace