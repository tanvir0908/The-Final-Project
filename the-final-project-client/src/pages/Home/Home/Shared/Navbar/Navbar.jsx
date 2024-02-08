import { SiAirbnb } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto py-5">
      <div className="flex items-center text-2xl font-medium gap-2">
        <SiAirbnb />
        <h2>airbnb</h2>
      </div>
      <div className="flex gap-5 font-medium">
        <NavLink>Home</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Menu</NavLink>
        <NavLink>Shop</NavLink>
        <NavLink>Dashboard</NavLink>
      </div>
    </div>
  );
}
