"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPizzaSlice, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "md:bg-gray-900/90 md:backdrop-blur-sm bg-gray-900 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <FaPizzaSlice className="h-8 w-8 text-red-500" />
            <span className="text-xl text-white font-bold">Hot Pizza</span>
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-red-500 text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="hover:text-red-500 text-white transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-red-500 text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-red-500 text-white transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/order">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-colors">
                Order Now
              </button>
            </Link>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6">
          <div className="flex justify-end mb-8">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-red-500 transition-colors text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-white hover:text-red-500 transition-colors text-lg"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-red-500 transition-colors text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-red-500 transition-colors text-lg"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
