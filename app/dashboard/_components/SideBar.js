import Image from 'next/image'
import React from 'react'
import { Button } from '../../../components/ui/button'
import { Layout } from 'lucide-react'

function SideBar() {
  return (
    <>
    <div className='shadow-md border-2 border-r-gray-200 h-screen p-2'>
        <Image src={"/logo2.png"} alt='pdfanywhere' width={200} height={200} className='p-1 mt-3 m-auto'/>
        <div className='mt-10'>
            <Button className="hover:bg-zinc-800 p-5 w-full">+ Upload PDF</Button>
            <div className='flex gap-2 items-center p-3 mt-5'>
              <Layout/>
              <h2>Workspace</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideBar