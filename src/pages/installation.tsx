import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Link } from "react-router"
import { CodeBlock } from "@/components/app/code-block"
import { Button } from "@/components/ui/button"

export const InstallationPage = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h3>
      <div className="spance-y-4">
        <h4 className="scroll-m-20 text-xl font-medium tracking-tight">Prerequisites</h4>
        <p className="leading-7 not-first:mt-4">Before installing, ensure you have the following:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <a
              href="https://nodejs.org/en/download/"
              target="_prerequisites"
              className="font-medium underline underline-offset-2"
            >
              Node.js
            </a>
            &nbsp;version 18 or later
          </li>
          <li>
            <a href="https://react.dev" target="_prerequisites" className="font-medium underline underline-offset-2">
              React
            </a>
            &nbsp;version 19 or later
          </li>
        </ul>
      </div>
      <div className="spance-y-4">
        <h4 className="scroll-m-20 text-xl font-medium tracking-tight">Install shadcn/ui</h4>
        <p className="leading-7 not-first:mt-4">
          First, you'll need to install and configure shadcn/ui in your project. Follow the installation guide at&nbsp;
          <a
            href="https://ui.shadcn.com/docs/installation"
            target="_prerequisites"
            className="font-medium underline underline-offset-2"
          >
            shadcn/ui documentation.
          </a>
        </p>
        <p className="leading-7 not-first:mt-4">
          Once shadcn/ui is set up, you can install <strong>lexical editor</strong> components using the{" "}
          <strong>shadcn CLI</strong>.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="scroll-m-20 text-xl font-medium tracking-tight">Using the shadcn CLI</h4>
        <CodeBlock lang="bash" code='npx shadcn@latest add "https://lexical.kamilo.dev/r/lexical.json"' />
      </div>
      <div className="space-y-4">
        <h4 className="scroll-m-20 text-xl font-medium tracking-tight">Usage</h4>
        <p className="leading-7 ">After installation, import and start using the components in your project:</p>
        <CodeBlock lang="bash" code='import { LexicalEditor } from "@/components/lexical/editor"' />
      </div>
      <div className="flex justify-between">
        <Button variant="outline" size="sm" asChild={true}>
          <Link to="/introduction">
            <ChevronLeftIcon />
            <span>Introduction</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild={true}>
          <Link to="/">
            <span>Home</span>
            <ChevronRightIcon />
          </Link>
        </Button>
      </div>
    </>
  )
}
