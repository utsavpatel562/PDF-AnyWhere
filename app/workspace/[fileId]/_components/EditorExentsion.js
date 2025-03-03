import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Highlighter, Italic, Underline } from 'lucide-react';
import React from 'react';

function EditorExentsion({ editor }) {
  if (!editor) return null; // Return null if editor is not available

  return editor&&(
    <div className='p-5'>
      <div className="control-group">
        <div className="button-group flex gap-3">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <Bold/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <Italic/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <Underline />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <Highlighter/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <AlignLeft/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <AlignCenter/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <AlignRight/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={editor.isActive({ textAlign: 'justify' }) ? 'text-blue-700 bg-blue-100 p-2 rounded-sm' : 'hover:bg-blue-50 hover:text-blue-700 hover:rounded-sm p-2'}
          >
            <AlignJustify/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorExentsion;
