import React from 'react'

function PDFViewer({fileUrl}) {
  console.log(fileUrl);
  return (
    <div>
      <iframe src={fileUrl+"#toolbar=0"} height="90vh" width="100%" className='h-[90vh] border-l-4 border-black'/>
    </div>
  )
}

export default PDFViewer