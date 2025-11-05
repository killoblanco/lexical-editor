import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export const IntroductionPage = () => {
  return (
    <>
      <div className="max-w-2xl">
        <p className="leading-7 not-first:mt-6">
          <strong>Lexical Editor</strong> is a set of customizable, high-quality components built for content edition,
          making it easy to design rich text experiences, document editors, content management systems, and more,
          quickly and beautifully.
        </p>
        <p className="leading-7 not-first:mt-6">
          This project is a work in progress, and I'm continuously improving and expanding the collection. I'd love to
          hear your feedback or see your contributions as it evolves!
        </p>
        <p className="leading-7 not-first:mt-6">
          <strong>Lexical Editor</strong> is open source. Check out the code and contribute on&nbsp;
          <a
            href="https://github.com/killoblanco/lexical-editor"
            target="_github"
            className="font-medium underline underline-offset-2"
          >
            GitHub
          </a>
        </p>
        <p className="leading-7 not-first:mt-6">
          Special thanks to&nbsp;
          <a href="https://github.com/ibelick" target="_ibelik" className="font-medium underline underline-offset-2">
            Julien Thibeaut (@ibelick)
          </a>
          &nbsp;for providing me with the idea for the style and introduction used in this documentation from his
          project&nbsp;
          <a href="https://www.prompt-kit.com" target="_ibelik" className="font-medium underline underline-offset-2">
            prompt-kit
          </a>
        </p>
      </div>
      <div className="max-w-2xl flex justify-between">
        <Button variant="outline" size="sm" asChild={true}>
          <Link to="/">
            <ChevronLeftIcon />
            <span>Home</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild={true}>
          <Link to="/installation">
            <span>Installation</span>
            <ChevronRightIcon />
          </Link>
        </Button>
      </div>
    </>
  )
}
