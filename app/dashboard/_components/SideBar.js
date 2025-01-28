import Image from 'next/image'
import React from 'react'

function SideBar() {
  return (
    <>
    <div className='shadow-sm h-screen p-7'>
        <Image src={"/logo2.png"} alt='pdfanywhere' width={200} height={200}/>
    </div>
    </>
  )
}

export default SideBar