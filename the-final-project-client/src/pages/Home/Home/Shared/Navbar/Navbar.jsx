import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-10 opacity-10 bg-black text-white">
      <div className="relative max-w-screen-xl mx-auto px-5 lg:px-0 py-5 flex items-center justify-between">
        <div>
          <h2 className="font-medium text-3xl">Food Here</h2>
        </div>
        <div className="space-x-10 font-medium hidden lg:block">
          <NavLink>Home</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Menu</NavLink>
          <NavLink>Shop</NavLink>
          <NavLink>Dashboard</NavLink>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-3xl">
            <IoMenu />
          </button>
        </div>
        {open && (
          <div className="absolute flex flex-col w-[40%] top-16 z-10 bg-white right-5 border-2 border-gray-500 rounded-xl">
            <NavLink className={"py-3 px-5"}>Home</NavLink>
            <NavLink className={"py-3 px-5"}>Contact</NavLink>
            <NavLink className={"py-3 px-5"}>Menu</NavLink>
            <NavLink className={"py-3 px-5"}>Shop</NavLink>
            <NavLink className={"py-3 px-5"}>Dashboard</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
