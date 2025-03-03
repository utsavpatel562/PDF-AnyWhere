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
        extensions: [StarterKit, Placeholder.configure({
            placeholder: "Start Taking Your Notes Here..."
        }), 
        Underline, 
        Highlight, 
        Document,
        Paragraph,
        Text,
        Heading,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
    ],
        content: '',
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-screen p-5'
            }
        }
      })
  return (
    <div>
        <EditorExentsion editor={editor} />
        <div>
            <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default TextEditor