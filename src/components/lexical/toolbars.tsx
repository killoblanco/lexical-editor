"use client"

import { type FC, type PropsWithChildren, useRef } from "react"

export const Toolbar: FC<PropsWithChildren> = ({ children }) => {
  const toolbarRef = useRef<HTMLDivElement>(null)

  return (
    <div className="p-1 flex items-center gap-2 overflow-x-auto" ref={toolbarRef}>
      {children}
    </div>
  )
}
