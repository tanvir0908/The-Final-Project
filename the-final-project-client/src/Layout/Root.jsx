import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";

export default function Root() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
