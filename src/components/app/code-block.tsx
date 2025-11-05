"use client"

import { type FC, useEffect, useState } from "react"
import { type BundledLanguage, type BundledTheme, codeToHtml } from "shiki"
import { Skeleton } from "../ui/skeleton"

type Props = {
  code: string
  lang?: BundledLanguage
  theme?: BundledTheme
}

export const CodeBlock: FC<Props> = ({ code, lang = "typescript", theme = "github-light" }) => {
  const [html, setHtml] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getHtml = async () => {
      const highlightedHtml = await codeToHtml(code, { lang, theme })
      setHtml(highlightedHtml)
      setIsLoading(false)
    }

    getHtml()
  }, [code, lang, theme])

  if (isLoading) {
    return <Skeleton className="aspect-video w-full rounded-lg" />
  }

  return (
    <div className="border rounded-lg overflow-hidden p-2">
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: required for shiki */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
