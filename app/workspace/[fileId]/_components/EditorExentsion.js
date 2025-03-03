import { Bold, Italic, Underline } from 'lucide-react';
import React from 'react';

function EditorExentsion({ editor }) {
  if (!editor) return null; // Return null if editor is not available

  return editor&&(
    <div className='p-5'>
      <div className="control-group">
        <div className="button-group flex gap-3">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'p-2'}
          >
            <Bold/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'p-2'}
          >
            <Italic/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'p-2'}
          >
            <Underline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorExentsion;
