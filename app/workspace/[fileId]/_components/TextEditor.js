import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import EditorExentsion from './EditorExentsion'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'
function TextEditor() {
    const editor = useEditor({
        extensions: [
          StarterKit, // This already includes BulletList, ListItem, and ListKeymap
          Placeholder.configure({
            placeholder: "Start Taking Your Notes Here...",
          }),
          Underline,
          Highlight,
          Document,
          Paragraph,
          Text,
          Heading,
          TextAlign.configure({
            types: ["heading", "paragraph"],
          }),
        ],
        content: "",
        editorProps: {
          attributes: {
            class: "focus:outline-none h-screen p-5",
          },
        },
      });
      
  return (
    <div className='p-4 h-fit'>
        <EditorExentsion editor={editor} />
        <div className='prose max-w-none bg-slate-100 rounded-md border border-slate-200 h-[calc(100vh-8rem)] overflow-y-auto'>
    <EditorContent editor={editor} className='list-disc ml-5 h-full' />
</div>

    </div>
  )
}

export default TextEditor