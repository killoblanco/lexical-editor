import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { mergeRegister } from "@lexical/utils"
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  type ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical"
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const TextAlignControls = () => {
  const [editor] = useLexicalComposerContext()
  const [alignment, setAlignment] = useState<ElementFormatType>("")

  const updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode()
      const element = anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow()

      if ($isElementNode(element)) {
        setAlignment(element.getFormatType())
      }
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

  const handleClick = (alignment: ElementFormatType | "default") => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment === "default" ? "" : alignment)
  }

  return (
    <Select value={alignment} onValueChange={handleClick}>
      <SelectTrigger>
        <SelectValue placeholder="Alignment" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Default</SelectItem>
        <SelectItem value="left">
          <AlignLeftIcon />
          Left
        </SelectItem>
        <SelectItem value="center">
          <AlignCenterIcon />
          Center
        </SelectItem>
        <SelectItem value="right">
          <AlignRightIcon />
          Right
        </SelectItem>
        <SelectItem value="justify">
          <AlignJustifyIcon />
          Justify
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
