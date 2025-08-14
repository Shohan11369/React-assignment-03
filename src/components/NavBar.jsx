import React from "react";
import { Search, MapPin, User } from "lucide-react";

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
  return (
    <nav className="bg-white shadow-sm w-full">
      {/* Top part */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <span className="bg-primary text-white font-bold px-3 py-1 rounded-md">
            myfeedback
          </span>
        </div>

        {/* Middle: Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-[450px] max-w-full">
          <input
            type="text"
            placeholder="restaurant, hotel, service..."
            className="px-4 py-2 text-sm outline-none flex-1"
          />
          <div className="flex items-center border-l border-gray-300 px-3">
            <MapPin size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Singapore"
              className="px-2 py-2 text-sm outline-none w-24"
            />
          </div>
          <button className="bg-primary text-white p-2 flex items-center justify-center">
            <Search size={16} />
          </button>
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
