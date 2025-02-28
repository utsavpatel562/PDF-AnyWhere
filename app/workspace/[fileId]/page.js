"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import WorkSpaceHeader from './_components/WorkSpaceHeader';
import PdfViewer from './_components/PdfViewer';
import { api } from '../../../convex/_generated/api';
import { useQuery } from 'convex/react';

function Workspace() {
    const {fileId} = useParams();
    const GetFileRecord=useQuery(api.fileStorage.GetFileRecord, {
        fileId:fileId
    })

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