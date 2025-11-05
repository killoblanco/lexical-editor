"use client"

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { mergeRegister } from "@lexical/utils"
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  type ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  type LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from "lexical"
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"
import { type FC, type PropsWithChildren, useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

const TextAlignControls: FC<{ editor: LexicalEditor; format: ElementFormatType }> = ({ editor, format }) => {
  const handleClick = (alignment: ElementFormatType) => () => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment)
  }

  return (
    <ButtonGroup>
      <Button size="icon" variant={format === "left" ? "default" : "outline"} onClick={handleClick("left")}>
        <AlignLeftIcon />
      </Button>
      <Button size="icon" variant={format === "center" ? "default" : "outline"} onClick={handleClick("center")}>
        <AlignCenterIcon />
      </Button>
      <Button size="icon" variant={format === "right" ? "default" : "outline"} onClick={handleClick("right")}>
        <AlignRightIcon />
      </Button>
      <Button size="icon" variant={format === "justify" ? "default" : "outline"} onClick={handleClick("justify")}>
        <AlignJustifyIcon />
      </Button>
    </ButtonGroup>
  )
}

export const Toolbar: FC<PropsWithChildren> = ({ children }) => {
  const [editor] = useLexicalComposerContext()
  const toolbarRef = useRef<HTMLDivElement>(null)
  const [elementFormat, setElementFormat] = useState<ElementFormatType>("")

  const updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      // Get the anchor node
      const anchorNode = selection.anchor.getNode()
      const element = anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow()

      if ($isElementNode(element)) {
        setElementFormat(element.getFormatType())
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

  return (
    <div className="p-1 flex items-center gap-2 overflow-x-auto" ref={toolbarRef}>
      {children}
      <TextAlignControls editor={editor} format={elementFormat} />
    </div>
  )
}
