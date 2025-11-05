"use client"

import { type InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import type { FC, PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

const EditorContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative border overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-ring">
      {children}
    </div>
  )
}

type Props = Partial<InitialConfigType> & {
  placeholder?: string
  classNames?: {
    placeholder?: string
  }
}
export const LexicalEditor: FC<PropsWithChildren<Props>> = ({
  children,
  placeholder = "Enter some text...",
  namespace = "LexicalEditor",
  theme = {
    text: {
      bold: "font-bold",
      italic: "italic",
      underline: "underline",
      strikethrough: "line-through",
      underlineStrikethrough: "[text-decoration-line:underline_line-through]",
    },
  },
  onError = console.error,
  classNames,
}) => {
  return (
    <LexicalComposer initialConfig={{ namespace, theme, onError }}>
      <EditorContainer>
        {children}
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="relative p-4 rounded-lg outline-none"
              aria-placeholder={placeholder}
              placeholder={
                <div
                  className={cn(
                    "absolute top-4 left-4 text-muted-foreground pointer-events-none select-none",
                    classNames?.placeholder,
                  )}
                >
                  {placeholder}
                </div>
              }
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </EditorContainer>
    </LexicalComposer>
  )
}
