import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { LexicalEditor } from "@/components/lexical/lexical"
import { Toolbar } from "@/components/lexical/plugins/toolbar"

export const LandingPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-screen">
      <LexicalEditor classNames={{ placeholder: "top-15" }}>
        <Toolbar />
        <HistoryPlugin />
      </LexicalEditor>
    </div>
  )
}
