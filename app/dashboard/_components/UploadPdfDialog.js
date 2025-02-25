"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog"

  import { Input } from "../../../components/ui/input"
import { Button } from '../../../components/ui/button'
import { TbLoader3 } from "react-icons/tb";
import { useAction, useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useUser } from '@clerk/nextjs'
import uuid4 from "uuid4";
import axios from 'axios'
function UploadPdfDialog({children}) {

  // logic to handle upload file
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl)
  const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDB)
  const getFileUrl=useMutation(api.fileStorage.getFileUrl)
  const embeddDocument = useAction(api.myAction.ingest);
  const {user} = useUser();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState();
  const OnFileSelect = (event) => {
    setFile(event.target.files[0]);
  }
  const OnUpload = async() => {
    setLoading(true);
    // 1: Get short-lived upload URL
    /*const postUrl = await generateUploadUrl();

    // 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    console.log('StorageID', storageId);

    const fileId = uuid4();
    const fileUrl = await getFileUrl({storageId: storageId})
    const resp = await addFileEntry({
      fileId: fileId,
      storageId: storageId,
      fileName: fileName?? 'Untitled File',
      fileUrl: fileUrl,
      createdBy:user?.primaryEmailAddress?.emailAddress,
    })
    console.log(resp); */

    // API Call to Fetch PDF Process Data
    const ApiResp = await axios.get('/api/pdf-loader');
    console.log(ApiResp.data.result);
    const embeddResult = embeddDocument({
      splitText: ApiResp.data.result,
      fileId: "123",
    });
    console.log(embeddResult);
    setLoading(false);
  }

  return (
    <>
    <Dialog>
  <DialogTrigger asChild>
    {children}
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload PDF File</DialogTitle>
      <DialogDescription asChild>
      <div className=''>
      <h2 className='mt-5'>Select a file to upload</h2>
        <div className='gap-2 p-3 rounded-md border'>
          <input type="file" accept='application/pdf' onChange={(event)=> OnFileSelect(event)}/>
        </div>
        <div className='mt-2'>
          <label>File Name *</label>
          <Input placeholder="your file name" className="mt-1" onChange={(e)=> setFileName(e.target.value)}/>
        </div>
      </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" className="flex items-center bg-neutral-200 text-zinc-500 hover:bg-neutral-200">
              Close
            </Button>
          </DialogClose>
          <Button className="flex justify-center" onClick={OnUpload}>{loading ? <TbLoader3 className='animate-spin'/>:'Upload'}</Button>
        </DialogFooter>
  </DialogContent>
</Dialog>
    </>
  )
}

export default UploadPdfDialog