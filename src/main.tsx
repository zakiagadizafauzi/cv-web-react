import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GetBrowserRoutes from "./routes/index.routes";
// import Loader from "@components/Reusable/Loader";

import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(GetBrowserRoutes());
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <ToastContainer />
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
