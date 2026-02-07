import React from "react";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const User = { name: "Aditya Kauthkar" };

  const logoutUser = () => {
    navigate("/");
  };

  return (
    <div className="bg-white shadow">
      <nav className="flex items-center justify-between px-4 mx-auto max-w-7xl py-3.5 text-slate-800 transition-all">
        <Link to="/">
          <img src="src\assets\logo.png" alt="logo" className="w-auto h-11" />
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden">Hii , {User?.name}</p>
          <button
            onClick={logoutUser}
            className="bg-white  hover:bg-slate-50 border  border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all "
          >
            Logout
          </button>
          <span>Aditya</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
