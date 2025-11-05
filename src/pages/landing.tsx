import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { Toolbar } from "@/components/wysiwyg/plugins/toolbar"
import { Wysiwyg } from "@/components/wysiwyg/wysiwyg"

export const LandingPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-screen">
      <Wysiwyg classNames={{ placeholder: "top-15" }}>
        <Toolbar />
        <HistoryPlugin />
      </Wysiwyg>
    </div>
  )
}
