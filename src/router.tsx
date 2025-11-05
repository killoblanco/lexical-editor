import { BrowserRouter, Route, Routes } from "react-router"
import { PageLayout } from "@/components/layout"
import { LandingPage } from "@/pages/landing"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route index={true} element={<LandingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
