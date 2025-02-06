import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog"

  import { Input } from "../../../components/ui/input"

function UploadPdfDialog({children}) {
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
        <div className='flex mt-5 gap-2 p-3 rounded-md border'>
          <h2>Select a file to upload</h2>
          <input type="file"/>
        </div>
        <div className='mt-2'>
          <label>File Name *</label>
          <Input placeholder="your file name" className="mt-1"/>
        </div>
      </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </>
  )
}

export default UploadPdfDialog