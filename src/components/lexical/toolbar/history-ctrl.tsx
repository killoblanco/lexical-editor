"use client"

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { mergeRegister } from "@lexical/utils"
import { CAN_REDO_COMMAND, CAN_UNDO_COMMAND, COMMAND_PRIORITY_LOW, REDO_COMMAND, UNDO_COMMAND } from "lexical"
import { RedoIcon, UndoIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export const HistoryControls = () => {
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
