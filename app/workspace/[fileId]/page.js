// THIS HAVE TEXT-EDITOR AND PDF VIEWER
"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import WorkSpaceHeader from './_components/WorkSpaceHeader';
import PdfViewer from './_components/PdfViewer';
import TextEditor from './_components/TextEditor';
import { api } from '../../../convex/_generated/api';
import { useQuery } from 'convex/react';

function Workspace() {
    const {fileId} = useParams();
    const fileInfo=useQuery(api.fileStorage.GetFileRecord, {
        fileId:fileId
    })

    useEffect(()=> {
        console.log(fileInfo);
    },[fileInfo])

    return (
    <div>
        <WorkSpaceHeader/>
        <div className='grid grid-cols-2 gap-2'>
            <div>
                {/* Text Editor */}
                <TextEditor/>
            </div>
            <div>
                {/* PDF Viewer */}
                <PdfViewer fileUrl={fileInfo?.fileUrl}/>
            </div>
        </div>
    </div>
  )
}

export default Workspace
