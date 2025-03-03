import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import EditorExentsion from './EditorExentsion'
import Underline from '@tiptap/extension-underline'

function TextEditor() {
    const editor = useEditor({
        extensions: [StarterKit, Placeholder.configure({
            placeholder: "Start Taking Your Notes Here..."
        }), Underline],
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