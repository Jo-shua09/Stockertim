import { sidebarLinks } from "../../assets/data/SideNavigation";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Sidebar() {
  const location = useLocation();
  const pathName = location.pathname;
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="max-w-[25rem] w-full pt-8 h-screen fixed left-0 bg-white">
      {sidebarLinks.map((sidebarLink, index) => (
        <div key={index}>
          {sidebarLink.dropdown ? (
            <div className="w-full">
              <div
                className={`flex justify-between pr-2 items-center py-6 hover:text-blue-900 pl-10 cursor-pointer w-full hover:bg-gray-50 ${
                  activeDropdown === index ? "bg-gray-50 border-r-2 border-gray-800 text-blue-900" : ""
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-[1.7rem] font-medium">extras</span>
                {activeDropdown === index ? <IoIosArrowUp className="text-4xl" /> : <IoIosArrowDown className="text-4xl" />}
              </div>
              {activeDropdown === index && (
                <ul className="w-full flex flex-col gap-2">
                  {sidebarLink.dropdown.map((item, itemIndex) => (
                    <Link to={item.link} key={itemIndex}>
                      <li
                        className={`text-[1.7rem] font-medium py-6 pl-16 text-gray-500 cursor-pointer hover:bg-gray-50 ${
                          pathName === item.link ? "bg-gray-50 border-r-2 border-gray-800 text-blue-900" : ""
                        }`}
                      >
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <ul className="w-full flex flex-col gap-2">
              <Link to={sidebarLink.link}>
                <li
                  className={`text-[1.7rem] font-medium py-6 pl-10 cursor-pointer hover:bg-gray-50 ${
                    pathName === sidebarLink.link ? "bg-gray-50 border-r-2 border-gray-800 text-blue-900" : ""
                  }`}
                >
                  {sidebarLink.name}
                </li>
              </Link>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
