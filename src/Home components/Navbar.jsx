import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-green-900">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">

        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./images/file.png" className="h-14" alt="pizza logo" />
          <span className="self-center text-5xl text-green-600 font-extrabold whitespace-nowrap dark:text-white">Food<span className='text-green-600 font-extrabold'>Lovers</span></span>
        </Link>

        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Open menu"
        >
          <svg className="w-5 h-5" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-2xl text-green-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
            </li>
            <li>
              <Link to="/recipe" className="block py-2 px-3 text-2xl text-green-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Recipes</Link>
            </li>
            <li>
              <Link to="/addrecipes" className="block py-2 px-3 text-2xl text-green-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Recipes</Link>
            </li>
            <li>
              <Link to="/contactus" className="block py-2 px-3 text-2xl text-green-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
