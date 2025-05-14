import Link from 'next/link';
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isLoggedIn, userName, logout } = useAuth();

  return (
    <>
      <div className="w-full h-20 py-2 px-10 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md backdrop-blur-sm bg-zinc-800/10">
        <div className="logo size-16">
          <img className="size-full object-cover" src="/images/SAT1600/satlogo.png" alt="Logo" />
        </div>
        <div className="links">
          <ul className="flex items-center gap-5">
            <li className="text-lg font-semibold text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg font-semibold text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <Link href="/satpracticetest">SAT Practice Test</Link>
            </li>
            <li className="text-lg font-semibold text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <Link href="/financialaid">Financial Aid</Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="text-lg font-semibold text-zinc-200 hover:text-zinc-50 cursor-pointer">
                  <Link href="/login">Login</Link>
                </li>
                <li className="text-lg font-semibold text-zinc-200 hover:text-zinc-50 cursor-pointer">
                  <Link href="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-lg font-semibold text-zinc-200 cursor-default">
                  Welcome, {userName}
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="text-lg font-semibold text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;