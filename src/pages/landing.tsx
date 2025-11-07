import { GithubIcon } from "lucide-react"
import { Link } from "react-router"
import { CodeBlock } from "@/components/app/code-block"
import { NavButtons } from "@/components/app/nav-btns"
import { HistoryCtrl, TextAlignCtrl, TextFormatCtrl } from "@/components/lexical/controls"
import { LexicalEditor } from "@/components/lexical/editor"
import { Toolbar } from "@/components/lexical/toolbars"
import { Button } from "@/components/ui/button"

const CODE_SNIPPET = `import { LexicalEditor } from "@/components/lexical/editor"
import {
  HistoryCtrl,
  TextAlignCtrl,
  TextFormatCtrl
} from "@/components/lexical/controls"
import { Toolbar } from "@/components/lexical/toolbars"

function EditorBasic() {
  return (
    <LexicalEditor classNames={{ placeholder: "top-15" }}>
      <Toolbar>
        <HistoryCtrl />
        <TextFormatCtrl />
        <TextAlignCtrl />
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
      <div className="flex items-center gap-4 mb-">
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
      <LexicalEditor classNames={{ placeholder: "top-20" }}>
        <Toolbar>
          <HistoryCtrl />
          <TextFormatCtrl />
          <TextAlignCtrl />
        </Toolbar>
      </LexicalEditor>
      <CodeBlock code={CODE_SNIPPET} lang="tsx" />
      <NavButtons next={{ label: "Introduction", to: "/introduction" }} />
    </>
  )
}
