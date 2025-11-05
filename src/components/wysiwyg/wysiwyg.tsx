import { LexicalComposer, type InitialConfigType } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import type { FC, PropsWithChildren } from "react"

type Props = InitialConfigType & {
  placeholder?: string
}
export const Wysiwyg: FC<PropsWithChildren<Props>> = ({
  children,
  placeholder = "Enter some text...",
  ...initialConfig
}) => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="relative border overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-ring">
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="relative p-4 rounded-lg"
              aria-placeholder={placeholder}
              placeholder={
                <div className="absolute top-4 left-4 text-muted-foreground pointer-events-none">{placeholder}</div>
              }
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      {children}
    </LexicalComposer>
  )
}
