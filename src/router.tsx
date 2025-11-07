import { BrowserRouter, Route, Routes } from "react-router"
import { PageLayout } from "@/components/app/layout"
import { LandingPage } from "@/pages/landing"
import { LexicalEditorPage } from "./pages/components/lexical-editor"
import { ToolbarPage } from "./pages/components/toolbar"
import { InstallationPage } from "./pages/installation"
import { IntroductionPage } from "./pages/introduction"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route index={true} element={<LandingPage />} />
        <Route path="introduction" element={<IntroductionPage />} />
        <Route path="installation" element={<InstallationPage />} />
        <Route path="lexical-editor" element={<LexicalEditorPage />} />
        <Route path="toolbar" element={<ToolbarPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
