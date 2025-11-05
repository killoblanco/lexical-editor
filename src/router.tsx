import { BrowserRouter, Route, Routes } from "react-router"
import { PageLayout } from "@/components/app/layout"
import { LandingPage } from "@/pages/landing"
import { InstallationPage } from "./pages/installation"
import { IntroductionPage } from "./pages/introduction"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route index={true} element={<LandingPage />} />
        <Route path="introduction" element={<IntroductionPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
