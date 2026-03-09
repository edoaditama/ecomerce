import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react"; //

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              AscendKit
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/Home" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link
              href="/Products"
              className="text-gray-700 hover:text-indigo-600"
            >
              Product
            </Link>
            <Link href="/promo" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
        </div>
      </div>
    </nav>
  );
}
