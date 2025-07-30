import { useState } from "react";

const navLinks = [
  { href: "#main-content", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjust this based on navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[9999] bg-gray-900 shadow-lg border-b border-gray-700">
      <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-400">
            eBusiness
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors cursor-pointer text-sm xl:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all text-sm xl:text-base">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="text-gray-300 hover:text-blue-400 focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
        style={{
          maxHeight: isMenuOpen ? "500px" : "0px",
          overflow: "hidden",
        }}
      >
        <div className="flex flex-col items-center px-4 sm:px-6 py-4 space-y-4 sm:space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-center text-gray-300 hover:text-blue-400 font-medium transition-colors cursor-pointer text-base sm:text-lg py-2 px-3 rounded-md hover:bg-gray-800 w-full"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button - Mobile */}
          <div className="pt-2 sm:pt-3 w-full flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all text-base sm:text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
