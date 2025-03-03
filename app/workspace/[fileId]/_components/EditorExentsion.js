import React from 'react';

function EditorExentsion({ editor }) {
  if (!editor) return null; // Return null if editor is not available

  return (
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
  );
}

export default EditorExentsion;
