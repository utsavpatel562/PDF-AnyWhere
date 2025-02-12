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
import { MdOutlineFileUpload } from "react-icons/md";
import { TbLoader3 } from "react-icons/tb";
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
function UploadPdfDialog({children}) {

  // logic to handle upload file
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl)
  const [file, setFile] = useState();
  const loading, setLoading = useState(false);
  const OnFlieSelect = (event) => {
    setFile(event.target.files[0]);
  }
  const OnUpload = () => {

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
          <input type="file" accept='application/pdf' onChange={(event)=> OnFlieSelect(event)}/>
        </div>
        <div className='mt-2'>
          <label>File Name *</label>
          <Input placeholder="your file name" className="mt-1"/>
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
          <Button className="flex justify-center" onClick={OnUpload}>{loading ? <TbLoader3 className='animate-spin'/>:'Upload'}<MdOutlineFileUpload/></Button>
        </DialogFooter>
  </DialogContent>
</Dialog>
    </>
  )
}

export default UploadPdfDialog