import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import type { FC } from "react"
import { Link } from "react-router"
import { Button } from "../ui/button"

export const NavButtons: FC<Partial<Record<"prev" | "next", Record<"label" | "to", string>>>> = ({ prev, next }) => {
  return (
    <div className="flex justify-between">
      {prev ? (
        <Button variant="outline" size="sm" asChild={true}>
          <Link to={prev.to}>
            <ChevronLeftIcon />
            <span>{prev.label}</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}
      {next ? (
        <Button variant="outline" size="sm" asChild={true}>
          <Link to={next.to}>
            <span>{next.label}</span>
            <ChevronRightIcon />
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}
