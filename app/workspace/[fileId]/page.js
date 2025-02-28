"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import WorkSpaceHeader from './_components/WorkSpaceHeader';
import PdfViewer from './_components/PdfViewer';

function Workspace() {
    const {fileId} = useParams();
    const GetFileInfo=()=> {
        
    }

    return (
    <div>
        <WorkSpaceHeader/>
        <div>
            <div>
                {/* Text Editor */}
            </div>
            <div>
                {/* PDF Viewer */}
                <PdfViewer/>
            </div>
        </div>
    </div>
  )
}

export default Workspace