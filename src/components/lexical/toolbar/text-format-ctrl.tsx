import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { mergeRegister } from "@lexical/utils"
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
  type TextFormatType,
} from "lexical"
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export const TextFormatControls = () => {
  const [editor] = useLexicalComposerContext()
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikethrough, setIsStrikethrough] = useState(false)

  const updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"))
      setIsItalic(selection.hasFormat("italic"))
      setIsUnderline(selection.hasFormat("underline"))
      setIsStrikethrough(selection.hasFormat("strikethrough"))
    }
  }, [])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(
          () => {
            updateToolbar()
          },
          { editor },
        )
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          updateToolbar()
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
    )
  }, [editor, updateToolbar])

  const handleClick = (format: TextFormatType) => () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format)
  }

  return (
    <ButtonGroup>
      <Button size="icon" variant={isBold ? "default" : "outline"} onClick={handleClick("bold")}>
        <BoldIcon />
      </Button>
      <Button size="icon" variant={isItalic ? "default" : "outline"} onClick={handleClick("italic")}>
        <ItalicIcon />
      </Button>
      <Button size="icon" variant={isUnderline ? "default" : "outline"} onClick={handleClick("underline")}>
        <UnderlineIcon />
      </Button>
      <Button size="icon" variant={isStrikethrough ? "default" : "outline"} onClick={handleClick("strikethrough")}>
        <StrikethroughIcon />
      </Button>
    </ButtonGroup>
  )
}
