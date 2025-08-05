import { lazy } from "react";
import * as Landing from "@pages/landing";

// Layout
const LandingLayout = lazy(() => import("@layouts/LandingLayout"));

export default [
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ index: true, element: <Landing.LandingPage /> }],
  },
];
