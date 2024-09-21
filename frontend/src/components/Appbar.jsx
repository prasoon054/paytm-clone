import React from 'react';
import { Link } from 'react-router-dom';

export function Appbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://banner2.cleanpng.com/20180810/rwx/ed07768853fea11eb4d3fef78ab29e13.webp" className="h-8" alt="PayTM Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PayTM</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/" className="text-sm text-black-600 dark:text-slate-50">Prasoon</Link>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-900 dark:text-white hover:underline">Friends</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

