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
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useUser } from '@clerk/nextjs'
import uuid4 from "uuid4";
function UploadPdfDialog({children}) {

  // logic to handle upload file
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl)
  const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDB)
  const {user} = useUser();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState();
  const OnFileSelect = (event) => {
    setFile(event.target.files[0]);
  }
  const OnUpload = async() => {
    setLoading(true);
    // Get short-lived upload URL
    const postUrl = await generateUploadUrl();

    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    console.log('StorageID', storageId);

    const fileId = uuid4();
    const resp = await addFileEntry({
      fileId: fileId,
      storageId: storageId,
      fileName: fileName?? 'Untitled File',
      createdBy:user?.primaryEmailAddress?.emailAddress,
    })
    console.log(resp);
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