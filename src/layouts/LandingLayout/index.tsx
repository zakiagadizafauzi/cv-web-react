import { Outlet } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";

export default function LandingLayout() {
  return (
    <main>
      <LandingNavbar />
      <Outlet />
      <LandingFooter />
    </main>
  );
}
