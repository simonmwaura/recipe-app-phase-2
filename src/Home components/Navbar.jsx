import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-green-900">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-12">

        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="data:image/jpeg;base64,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" className="h-12" alt="pizza logo" />
          <span className="self-center text-3xl text-green-600 font-extrabold whitespace-nowrap dark:text-white">Food<span className='text-green-600 font-extrabold'>Lovers</span></span>
        </Link>

        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
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
