import { $convertFromMarkdownString, $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { mergeRegister } from "@lexical/utils"
import { type FC, useEffect } from "react"

export const setEditorStateFromMarkdown = (markdown: string) => () => $convertFromMarkdownString(markdown, TRANSFORMERS)

export const MarkdownParser: FC<{
  onChange: (markdown: string) => void
}> = ({ onChange }) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(
          () => {
            const md = $convertToMarkdownString(TRANSFORMERS)
            onChange(md)
          },
          { editor },
        )
      }),
    )
  }, [editor, onChange])

  return null
}
