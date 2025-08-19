import React from "react";
import { Search, MapPin, User } from "lucide-react";
import { useState } from "react";
import ProfileDropDown from "../HomePage/DropDown";

const menuItems = [
  { icon: "/img1.png", label: "Restaurants" },
  { icon: "/img2.png", label: "Hotels" },
  { icon: "/img3.png", label: "Things to do" },
  { icon: "/img4.png", label: "Flights" },
  { icon: "/img5.png", label: "Rentals" },
  { icon: "/img6.png", label: "Shopping" },
  { icon: "/img7.png", label: "Events" },
  { icon: "/img1.png", label: "Restaurants" },
  { icon: "/img2.png", label: "Hotels" },
  { icon: "/img3.png", label: "Things to do" },
  { icon: "/img4.png", label: "Flights" },
  { icon: "/img5.png", label: "Rentals" },
];

function NavBar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="bg-white shadow-sm w-full mt-4">
      {/* Top part */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left: Logo */}
        <div className="flex items-center ">
          <img src="LogoMain.png" className="w-[120px]" alt="" />
        </div>

        {/* Middle: Search Box / Modal / Dropdown */}
        <div className="flex-5 mx-4">
          <ProfileDropDown />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
            <User size={14} className="inline mr-1" />
            Authenticate for business
          </button>
        </div>
      </div>

      {/* Bottom icons menu */}
      <div className="border-t border-gray-200 overflow-x-auto mt-2 ">
        <div className="max-w-6xl mx-auto flex items-center space-x-8 py-2 px-4 text-sm text-gray-600 gap-5">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center hover:text-primary"
            >
              <img src={item.icon} alt={item.label} className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
