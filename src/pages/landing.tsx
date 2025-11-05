import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { ChevronRightIcon, GithubIcon } from "lucide-react"
import { Link } from "react-router"
import { LexicalEditor } from "@/components/lexical/lexical"
import { Toolbar } from "@/components/lexical/plugins/toolbar"
import { Button } from "@/components/ui/button"

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
        <Button>Get Started</Button>
        <Button variant="outline">
          <GithubIcon />
          <span>Star on GitHub</span>
        </Button>
      </div>
      <div className="mt-12">
        <LexicalEditor classNames={{ placeholder: "top-15" }}>
          <Toolbar />
          <HistoryPlugin />
        </LexicalEditor>
      </div>
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
