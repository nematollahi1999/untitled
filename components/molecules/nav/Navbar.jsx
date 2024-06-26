import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 z-50 w-full hidden sm:block py-2 px-4">
      <div className=" flex items-center justify-end mx-auto p-4">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                کلابز
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                مارکت پلیس
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                خدمات طراحی
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse "
              >
                <img
                  src="./images/logo.svg"
                  className="h-8"
                  alt="Flowbite Logo"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./images/logo.svg" className="h-8" alt="Flowbite Logo" />
          </a>
        </div> */}
      </div>
    </nav>
  );
}
