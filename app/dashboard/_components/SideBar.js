import Image from 'next/image'
import React from 'react'
import { Button } from '../../../components/ui/button'

function SideBar() {
  return (
    <>
    <div className='shadow-md border-2 border-r-gray-200 h-screen p-2'>
        <Image src={"/logo2.png"} alt='pdfanywhere' width={200} height={200} className='p-1 mt-3 m-auto'/>
        <div className='mt-10'>
            <Button className="hover:bg-zinc-800 p-5 w-full">+ Upload PDF</Button>
        </div>
    </div>
    </>
  )
}

export default SideBar