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
import { Button } from '../../../components/ui/button'

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
      <h2 className='mt-5'>Select a file to upload</h2>
        <div className='gap-2 p-3 rounded-md border'>
          <input type="file"/>
        </div>
        <div className='mt-2'>
          <label>File Name *</label>
          <Input placeholder="your file name" className="mt-1"/>
        </div>
        <div>
          <Button>Upload</Button>
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