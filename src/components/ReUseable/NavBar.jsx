import React, { useState } from "react";
import { Search, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileDropDown from "../HomePage/DropDown";

function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  return (
    <nav className="bg-white shadow-sm w-full mt-4">
      {/* Top part */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src="LogoMain.png" className="w-[120px]" alt="Logo" />
        </div>

        {/* Middle: Search Box / Dropdown */}
        <div className="flex-5 mx-4">
          <ProfileDropDown />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate("/search")}
            className="
              border border-gray-300 rounded-full 
              px-2 py-1 text-xs  
              md:px-4 md:py-1 md:text-sm 
              hover:bg-gray-100
            "
          >
            <User size={14} className="inline mr-1" />
            Authenticate for business
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
