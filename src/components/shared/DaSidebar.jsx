import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";

const DaSidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded transition-colors duration-200 ${
      isActive ? "bg-gray-100  border-l-blue-600 border-l-4 " : "hover:bg-blue-100"
    }`;

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden p-4">
        <Menu
          size={28}
          className="cursor-pointer  text-gray-700"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
         h-[90vh] fixed top-0 right-0  w-64 bg-white shadow-lg transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col md:w-64
        `}
      >
        <h2 className="text-xl font-bold p-4 border-b">Dashboard</h2>
        <nav className="flex flex-col p-4 gap-2">
          <NavLink to="/dashboard/preview" className={navClass}>
            Preview
          </NavLink>
          <NavLink to="/dashboard/courses" className={navClass}>
            Courses
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default DaSidebar;
