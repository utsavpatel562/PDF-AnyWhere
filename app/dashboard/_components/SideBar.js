import React from 'react'
import { Button } from '../../../components/ui/button'
import { Progress } from '../../../components/ui/progress'
import { File, Layout, Settings, Shield } from 'lucide-react'
import UploadPdfDialog from './UploadPdfDialog'

function SideBar() {
  return (
    <>
    <div className='shadow-md border-2 border-r-gray-200 h-screen p-2'>
      <h1 className='text-2xl font-medium text-center mt-3'><b className='text-red-600'>PDF</b> <b className='text-blue-700'>AnyWhere</b></h1>
        <div className='mt-10'>
            <Button className="hover:bg-zinc-800 p-5 w-full">+ Upload PDF</Button>
            <UploadPdfDialog/>
            <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
              <Layout/>
              <h2>Workspace</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
              <Shield/>
              <h2>Upgrade</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
              <Settings/>
              <h2>Settings</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
              <File/>
              <h2>Project Docs</h2>
            </div>
        </div>
        <div className='absolute bottom-24 w-[80%]'>
        <Progress value={35} />
        <p className='text-sm mt-1'>2 out of 5 PDF Upload</p>
        <p className='text-xs text-gray-500 mt-2'>Upgrade to Upload more PDF</p>
        </div>
    </div>
    </>
  )
}

export default SideBar