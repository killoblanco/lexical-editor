import { PageLayout } from "@/components/layout";
import { LandingPage } from "@/pages/landing";
import { BrowserRouter, Route, Routes } from "react-router";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route index={true} element={<LandingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)