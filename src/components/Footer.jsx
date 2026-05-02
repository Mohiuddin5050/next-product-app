import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            ProductApp
          </h2>
          <p className="text-sm">
            A simple platform to manage and explore products easily with a
            modern dashboard and secure authentication.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>

            <li>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
            </li>

            <li>
              <Link href="/dashboard/add-product" className="hover:text-white">
                Add Product
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} ProductApp. All rights reserved.
      </div>
    </footer>
  );
}