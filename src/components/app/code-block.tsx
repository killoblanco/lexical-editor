"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import { type FC, useEffect, useState } from "react"
import { type BundledLanguage, type BundledTheme, codeToHtml } from "shiki"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"

type Props = {
  code: string
  lang?: BundledLanguage
  theme?: BundledTheme
}

export const CodeBlock: FC<Props> = ({ code, lang = "typescript", theme = "github-light" }) => {
  const [html, setHtml] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [wasCopied, setWasCopied] = useState(false)

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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setWasCopied(true)
      setTimeout(() => setWasCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="border rounded-lg overflow-auto p-2 text-xs group relative">
      <div className="hidden group-hover:block absolute top-2 right-2">
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground cursor-pointer"
          onClick={copyToClipboard}
          disabled={wasCopied}
        >
          {wasCopied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: required for shiki */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
