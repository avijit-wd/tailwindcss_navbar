import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

function App() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile", spacing: true },
    { title: "Setting" },
    { title: "Logout" },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } relative duration-300 `}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute top-9 -right-3 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Tailwind
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            open ? "px-4" : "px-2.5"
          }  py-2`}
        >
          <BsSearch
            className={`text-white block text-lg float-left cursor-pointer mr-2 ${
              !open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>

                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"} duration-200`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md mt-2`}
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">HomePage</h1>
      </div>
    </div>
  );
}

export default App;
