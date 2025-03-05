"use client";
import { useAction } from 'convex/react';
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Heading1, Heading2, Highlighter, Italic, List, Sparkles, Underline } from 'lucide-react';
import React from 'react';
import { api } from '../../../../convex/_generated/api';
import { useParams } from 'next/navigation';

function EditorExentsion({ editor }) {
  const {fileId}=useParams();
  const SearchAI = useAction(api.myAction.search)

  const onAiClick = async() => {
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      ''
    )
    console.log("SelectedText", selectedText);

    const result = await SearchAI({
      query: selectedText,
      fileId: fileId,
    })
    console.log("Unformatted Ans:", result);
  }

  if (!editor) return null; // Return null if editor is not available

  return editor&&(
    <div className='p-2 rounded-md mb-3 bg-slate-900'>
      <div className="control-group">
        <div className="button-group flex gap-3 justify-center">
        <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive({ level: 1 }) ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <Heading1/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive({ level: 2 }) ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <Heading2/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <Bold/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <Italic/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <Underline />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <Highlighter/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <List/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <AlignLeft/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <AlignCenter/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <AlignRight/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={editor.isActive({ textAlign: 'justify' }) ? 'text-slate-200 bg-slate-700 p-2 rounded-sm' : 'hover:bg-slate-800 hover:text-slate-200 text-slate-200 hover:rounded-sm p-2'}
          >
            <AlignJustify/>
          </button>
          <button
            onClick={() => onAiClick()}
            className={'flex items-center gap-2 text-slate-200 bg-blue-600 md:pr-5 md:pl-5 rounded-sm'}
          >
            <Sparkles className='w-5'/> Ask AI
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorExentsion;
