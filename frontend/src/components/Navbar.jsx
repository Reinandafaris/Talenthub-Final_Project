import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSidebarOpen } from "../redux/slices/cartSlice";
import Sidebar from "./Sidebar";
import UseBodyScroll from "../hooks/useBodyScroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  UseBodyScroll(open);

  const totalCart = useSelector((state) => state.cart.totalCart);

  return (
    <div className="w-full h-16 flex items-center justify-between">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center gap-4 text-2xl font-bold"
      >
        <img src="/logo.png" className="w-8 h-8" alt="" />
        <span>rei-restaurant</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* HAMBURGER MENU */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out bg-gray-300 ${
            open ? "-right-0" : "-right-full"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/menu/appetizers">Categories</Link>
          <Link to="/detail/cheesecake">Our Menu</Link>
          <Link to="/">Detail Menu</Link>
          <Link to="">
            <button
              className="py-2 px-4 rounded-3xl bg-blue-800 text-white"
              onClick={() => dispatch(setSidebarOpen(true))}
            >
              Cart
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/menu/appetizers">Categories</Link>
        <Link to="/detail/cheesecake">Our Menu</Link>
        <button
          className="py-2 px-4 rounded-3xl bg-blue-800 text-white shadow-md flex items-center"
          onClick={() => dispatch(setSidebarOpen(true))}
        >
          Cart
          <span class="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {totalCart}
          </span>
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default Navbar;
