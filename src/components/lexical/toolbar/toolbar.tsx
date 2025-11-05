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
  FORMAT_TEXT_COMMAND,
  type LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from "lexical"
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react"
import { type FC, type PropsWithChildren, useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

const TextFormatControls: FC<{
  editor: LexicalEditor
  isBold: boolean
  isItalic: boolean
  isUnderline: boolean
  isStrikethrough: boolean
}> = ({ editor, isBold, isItalic, isUnderline, isStrikethrough }) => {
  const handleClick = (format: "bold" | "italic" | "underline" | "strikethrough") => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format)
  }

  return (
    <ButtonGroup>
      <Button size="icon" variant={isBold ? "default" : "outline"} onClick={() => handleClick("bold")}>
        <BoldIcon />
      </Button>
      <Button size="icon" variant={isItalic ? "default" : "outline"} onClick={() => handleClick("italic")}>
        <ItalicIcon />
      </Button>
      <Button size="icon" variant={isUnderline ? "default" : "outline"} onClick={() => handleClick("underline")}>
        <UnderlineIcon />
      </Button>
      <Button
        size="icon"
        variant={isStrikethrough ? "default" : "outline"}
        onClick={() => handleClick("strikethrough")}
      >
        <StrikethroughIcon />
      </Button>
    </ButtonGroup>
  )
}

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
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikethrough, setIsStrikethrough] = useState(false)
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

      // Update text format
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

  return (
    <div className="p-1 flex items-center gap-2 overflow-x-auto" ref={toolbarRef}>
      {children}
      <TextFormatControls
        editor={editor}
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
        isStrikethrough={isStrikethrough}
      />
      <TextAlignControls editor={editor} format={elementFormat} />
    </div>
  )
}
