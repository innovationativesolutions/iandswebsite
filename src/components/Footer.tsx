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
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        
        {/* Left: Logo */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/company_logo.png" 
              alt="Innovations & Services LLC"
              width={150}
              height={150}
              className="h-25 w-25"
            />
          </Link>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Where your ambitions meet our actions.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a 
                href="/#hero" 
                onClick={(e) => handleSmoothScroll(e, 'hero')}
                className="hover:text-indigo-600 transition-colors duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="hover:text-indigo-600 transition-colors duration-300 ease-in-out"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="/#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="hover:text-indigo-600 transition-colors duration-300 ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="hover:text-indigo-600 transition-colors duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>📍 PO Box 5, Oakdale, PA 15071</li>
            <li>📞 <a href="tel:4122123157" className="hover:text-indigo-600 transition-colors duration-300 ease-in-out">412.212.3157</a></li>
            <li>✉️ <a href="mailto:support@iands-llc.com" className="hover:text-indigo-600 transition-colors duration-300 ease-in-out">support@iands-llc.com</a></li>
            <li>🌐 <a href="https://www.iands-llc.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors duration-300 ease-in-out">www.iands-llc.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Innovations & Services LLC. All rights reserved.
      </div>
    </footer>
  );
}
