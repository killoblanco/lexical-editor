"use client"

import { type FC, useEffect, useState } from "react"
import { type BundledLanguage, type BundledTheme, codeToHtml } from "shiki"

type Props = {
  code: string
  lang?: BundledLanguage
  theme?: BundledTheme
}

export const CodeBlock: FC<Props> = ({ code, lang = "typescript", theme = "github-light" }) => {
  const [html, setHtml] = useState("")

  useEffect(() => {
    const getHtml = async () => {
      const highlightedHtml = await codeToHtml(code, { lang, theme })
      setHtml(highlightedHtml)
    }

    getHtml()
  }, [code, lang, theme])

  return (
    <div className="border rounded-lg overflow-hidden p-2">
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: required for shiki */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
