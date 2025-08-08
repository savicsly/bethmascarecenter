"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div
        className={`bg-blue-900 text-white py-2 px-4 text-sm transition-all duration-300 ${
          isScrolled ? "hidden" : "block"
        } hidden md:block`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+234 (0) 904 646 7517</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@bethmascarecenter.com.ng</span>
            </div>
          </div>
          <div className="text-sm">
            Supporting Children with Special Needs in Abuja
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white shadow-sm py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="Bethmas Care Center"
                  width={50}
                  height={50}
                  className="h-16 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-blue-900 font-poppins">
                    Bethmas Care Center
                  </span>
                  <span className="text-xs text-gray-600 font-medium">
                    Abuja • Special Education
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors duration-200 relative group ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pt-2"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
