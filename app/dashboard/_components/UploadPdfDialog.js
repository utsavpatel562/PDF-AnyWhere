import React from 'react'
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
import { IoIosCloseCircleOutline } from "react-icons/io";
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
          <input type="file" accept='application/pdf'/>
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
          <Button className="flex justify-center">Upload<MdOutlineFileUpload/></Button>
        </DialogFooter>
  </DialogContent>
</Dialog>
    </>
  )
}

export default UploadPdfDialog