"use client"; 

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              AscendKit
            </Link>
          </div>

          {/* 2. Desktop Nav Links (Hidden di Mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">Home</Link>
            <Link href="/Products" className="text-gray-700 hover:text-indigo-600 font-medium transition">Product</Link>
            <Link href="/Category" className="text-gray-700 hover:text-indigo-600 font-medium transition">Category</Link>
          </div>

          {/* 3. Right Section: Search, Cart, Login & Hamburger */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 text-gray-700 hover:text-indigo-600">
              <Search size={20} />
            </button>
            
            {/* Login Button (Tampil hanya di Desktop) */}
            <Link href="/login" className="hidden md:block px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
              Login
            </Link>

            {/* Mobile Menu Button (Tampil hanya di Mobile) */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu (Hanya muncul jika isOpen = true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
          <Link href="/" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/Products" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={() => setIsOpen(false)}>Product</Link>
          <Link href="/Category" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={() => setIsOpen(false)}>Category</Link>
          <hr />
          <Link href="/login" className="block w-full text-center py-2 bg-indigo-600 text-white rounded-lg font-semibold">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}