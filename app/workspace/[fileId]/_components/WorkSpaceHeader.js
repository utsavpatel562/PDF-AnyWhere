import Image from 'next/image'
import React from 'react'

function WorkSpaceHeader() {
  return (
    <div className='p-4 flex justify-between shadow-sm'>
        <Image src={'/logo2.png'} alt='logo' width={240} height={100}/>
    </div>
  )
}

export default WorkSpaceHeader