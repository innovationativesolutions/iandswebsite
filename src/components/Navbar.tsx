"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1)); // Remove # from targetId
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <nav className="container relative flex flex-wrap items-center justify-between py-3 px-4 sm:px-6 lg:px-8 mx-auto lg:justify-between">
        {/* Logo  */}
        <div className="flex-shrink-0">
          <Link 
            href="#hero" 
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="transition-opacity duration-300 ease-in-out hover:opacity-80"
          >
            <Image
              src="/company_logo.png" 
              alt="Innovations & Services LLC Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
          </Link>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              {/* Mobile menu and Get Started button */}
              <div className="flex items-center gap-2 lg:hidden">
                  <ThemeChanger />
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      {open && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      )}
                      {!open && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                  <ThemeChanger />
                  <div className="flex items-center space-x-1">
                    {navigation.map((menu, index) => (
                      <Link 
                        key={index}
                        href={menu.href} 
                        onClick={(e) => handleSmoothScroll(e, menu.href)}
                        className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </div>
                  <Link 
                    href="#contact" 
                    onClick={(e) => handleSmoothScroll(e, '#contact')}
                    className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
                  >
                    Get Started
                  </Link>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  {navigation.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href} 
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                      href="#contact" 
                      onClick={(e) => handleSmoothScroll(e, '#contact')}
                      className="block w-full px-3 py-2 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
                    >         
                      Get Started
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


      </nav>
    </div>
  );
}

