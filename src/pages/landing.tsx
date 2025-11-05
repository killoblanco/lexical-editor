import { ChevronRightIcon, GithubIcon } from "lucide-react"
import { Link } from "react-router"
import { CodeBlock } from "@/components/app/code-block"
import { LexicalEditor } from "@/components/lexical/editor"
import { HistoryControls } from "@/components/lexical/toolbar/history-ctrl"
import { TextAlignControls } from "@/components/lexical/toolbar/text-align-ctrl"
import { TextFormatControls } from "@/components/lexical/toolbar/text-format-ctrl"
import { Toolbar } from "@/components/lexical/toolbar/toolbar"
import { Button } from "@/components/ui/button"

const CODE_SNIPPET = `import { LexicalEditor } from "@/components/lexical/editor"
import { HistoryControls } from "@/components/lexical/toolbar/history-ctrl"
import { TextAlignControls } from "@/components/lexical/toolbar/text-align-ctrl"
import { TextFormatControls } from "@/components/lexical/toolbar/text-format-ctrl"
import { Toolbar } from "@/components/lexical/toolbar/toolbar"

function EditorBasic() {
  return (
    <LexicalEditor>
      <Toolbar>
        <HistoryControls />
        <TextFormatControls />
        <TextAlignControls />
      </Toolbar>
    </LexicalEditor>
  )
}`

export const LandingPage = () => {
  return (
    <>
      <div>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight max-w-2xl">
          Core building blocks for Rich Text Editors with Lexical JS
        </h2>
        <h3 className="scroll-m-20 text-3xl tracking-tight text-muted-foreground max-w-2xl">
          High-quality, accessible, and customizable components for Rich Text Editors with Lexical JS
        </h3>
      </div>
      <div className="flex items-center gap-4">
        <Button asChild={true}>
          <Link to="/introduction">Get Started</Link>
        </Button>
        <Button variant="outline" asChild={true}>
          <a href="https://github.com/killoblanco/lexical-editor" target="_github">
            <GithubIcon />
            <span>Star on GitHub</span>
          </a>
        </Button>
      </div>
      <LexicalEditor classNames={{ placeholder: "top-15" }}>
        <Toolbar>
          <HistoryControls />
          <TextFormatControls />
          <TextAlignControls />
        </Toolbar>
      </LexicalEditor>
      <CodeBlock code={CODE_SNIPPET} lang="tsx" />
      <div className="flex justify-end">
        <Button variant="outline" size="sm" asChild={true}>
          <Link to="/introduction">
            <span>Introduction</span>
            <ChevronRightIcon />
          </Link>
        </Button>
      </div>
    </>
  )
}
