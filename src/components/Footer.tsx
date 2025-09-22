"use client";

// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
        
        {/* Left: Logo */}
        <div className="text-center md:text-left">
          <Link href="/" className="inline-flex items-center justify-center md:justify-start gap-3">
            <Image
              src="/company_logo.jpeg" 
              alt="Innovations & Services LLC"
              width={100}
              height={100}
              className="h-16 w-16 sm:h-20 sm:w-20"
            />
            <span className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 dark:text-white">
              Innovations & Services LLC
            </span>
          </Link>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Where your ambitions meet our actions.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a 
                href="/#hero" 
                onClick={(e) => handleSmoothScroll(e, 'hero')}
                className="hover:text-primary-600 transition-colors duration-300 ease-in-out inline-block py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="hover:text-primary-600 transition-colors duration-300 ease-in-out inline-block py-1"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="/#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="hover:text-primary-600 transition-colors duration-300 ease-in-out inline-block py-1"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="hover:text-primary-600 transition-colors duration-300 ease-in-out inline-block py-1"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <li className="py-1">📍 PO Box 5, Oakdale, PA 15071</li>
            <li className="py-1">📞 <a href="tel:4122123157" className="hover:text-primary-600 transition-colors duration-300 ease-in-out">412.212.3157</a></li>
            <li className="py-1">✉️ <a href="mailto:support@iands-llc.com" className="hover:text-primary-600 transition-colors duration-300 ease-in-out break-all">support@iands-llc.com</a></li>
            <li className="py-1">🌐 <a href="https://www.iands-llc.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors duration-300 ease-in-out">www.iands-llc.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Innovations & Services LLC. All rights reserved.
      </div>
    </footer>
  );
}
