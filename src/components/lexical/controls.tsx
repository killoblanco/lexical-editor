"use client"

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { mergeRegister } from "@lexical/utils"
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  type ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  type TextFormatType,
  UNDO_COMMAND,
} from "lexical"
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  RedoIcon,
  StrikethroughIcon,
  UnderlineIcon,
  UndoIcon,
} from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const HistoryCtrl = () => {
  const [editor] = useLexicalComposerContext()
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload)
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload)
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
    )
  }, [editor])

  const handleClick = (command: typeof UNDO_COMMAND | typeof REDO_COMMAND) => () => {
    editor.dispatchCommand(command, undefined)
  }

  return (
    <>
      <ButtonGroup>
        <Button size="icon" variant="outline" disabled={!canUndo} onClick={handleClick(UNDO_COMMAND)}>
          <UndoIcon />
        </Button>
        <Button size="icon" variant="outline" disabled={!canRedo} onClick={handleClick(REDO_COMMAND)}>
          <RedoIcon />
        </Button>
      </ButtonGroup>
      <HistoryPlugin />
    </>
  )
}

export const TextAlignCtrl = () => {
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

export const TextFormatCtrl = () => {
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
