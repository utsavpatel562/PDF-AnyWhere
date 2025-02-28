import Image from 'next/image'
import React from 'react'

function WorkSpaceHeader() {
  return (
    <div>
        <Image src={'/logo1.png'} alt='logo' width={140} height={100}/>
    </div>
  )
}

export default WorkSpaceHeader