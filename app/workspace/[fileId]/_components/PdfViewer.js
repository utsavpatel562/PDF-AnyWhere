import React from 'react';

function PDFViewer({ fileUrl }) {
  console.log(fileUrl);
  return (
    <div className="h-[95vh] w-full overflow-hidden">
      <iframe 
        src={fileUrl + "#toolbar=0"} 
        className="h-full w-full border-l-4 border-black"
      />
    </div>
  );
}

export default PDFViewer;
