import React from 'react'

function EditorExentsion({editor}) {
  return (
    <div>
        <div>
        <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            Toggle bold
          </button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default EditorExentsion