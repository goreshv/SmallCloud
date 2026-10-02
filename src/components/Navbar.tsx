import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenDeployModal: () => void;
  onOpenDocsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeployModal, onOpenDocsModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#dashboard-showcase' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', action: onOpenDocsModal },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.action) {
      e.preventDefault();
      link.action();
      setMobileMenuOpen(false);
    } else if (link.href?.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(link.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#000000]/95 backdrop-blur-md border-b border-gray-200/80 dark:border-[#1F1F1F] shadow-subtle py-3'
          : 'bg-white/80 dark:bg-[#000000]/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md p-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-lg bg-[#000000] dark:bg-[#111111] flex items-center justify-center text-white border border-gray-800 dark:border-[#262626] shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 20C8.34315 20 7 18.6569 7 17C7 15.4806 8.1307 14.2254 9.60144 14.0305C9.53483 13.6963 9.5 13.3522 9.5 13C9.5 10.5147 11.5147 8.5 14 8.5C15.9084 8.5 17.5357 9.68913 18.1729 11.3653C18.6791 11.1298 19.2435 11 19.8333 11C21.7663 11 23.3333 12.567 23.3333 14.5C23.3333 14.6644 23.322 14.8262 23.3 14.9845C24.3142 15.429 25 16.4382 25 17.6C25 19.2569 23.6569 20.6 22 20.6H10.5"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14 20L16 17.5L18 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 18V23.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-lg tracking-tight text-gray-950 dark:text-white font-sans">
                SmallCloud
              </span>
              <span className="text-[11px] font-mono font-medium px-1.5 py-0.5 rounded bg-gray-100 dark:bg-[#141414] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#222222]">
                .si
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || '#'}
                onClick={(e) => handleLinkClick(e, link)}
                className="px-3.5 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-[#161616] rounded-md transition-colors duration-150 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons & Theme Switcher - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button with smooth rotation */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161616] border border-transparent dark:border-[#1F1F1F] transition-colors cursor-pointer"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </motion.button>

            <button
              onClick={onOpenDeployModal}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white px-3 py-1.5 rounded-md hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors duration-150 cursor-pointer"
            >
              Sign in
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDeployModal}
              className="inline-flex items-center gap-1.5 text-sm font-medium bg-[#111111] dark:bg-[#FFFFFF] text-white dark:text-[#000000] hover:bg-black dark:hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-150 shadow-sm hover:shadow cursor-pointer"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161616] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-b border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#000000] px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href || '#'}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#141414] rounded-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-gray-100 dark:border-[#1F1F1F] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployModal();
                }}
                className="w-full text-center py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#141414] rounded-lg border border-gray-200 dark:border-[#262626] cursor-pointer"
              >
                Sign in with GitHub
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium bg-[#111111] dark:bg-white text-white dark:text-[#000000] rounded-lg hover:bg-black dark:hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span>Deploy your first app</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
