import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../pages/Home/Home/Shared/Navbar/Navbar";

export default function Root() {
  return (
    <div className="font-primary">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
