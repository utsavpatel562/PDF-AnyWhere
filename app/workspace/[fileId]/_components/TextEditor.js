import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

function TextEditor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
      })
  return (
    <div>
        <div>
            <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default TextEditor