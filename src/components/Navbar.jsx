// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 shadow z-50">
//       <div className="max-w-7xl mx-auto flex justify-between p-4">
//         <Link href="/" className="font-bold text-xl">
//           ProductApp
//         </Link>
//         <div className="flex gap-6 items-center">
//         <Link href="/">Home</Link>
//         <Link href="/products">Products</Link>
//         <Link href="/dashboard/manage-products">Manage Products</Link>
//         <Link href="/login">Login</Link>
//       </div>
//       </div>
      
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {

  const { data: session } = useSession();
  const [open,setOpen] = useState(false);

  return (

    <nav className="shadow sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          ProductApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <Link href="/">Home</Link>

          <Link href="/products">Products</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          {/* Login / User */}
          {!session ? (

            <Link
              href="/login"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Login
            </Link>

          ) : (

            <div className="relative group">

              <button className="font-semibold">
                {session.user?.name}
              </button>

              {/* Dropdown */}
              <div className="absolute hidden group-hover:block right-0 mt-2 bg-white shadow rounded w-40">

                <Link
                  href="/dashboard/add-product"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Add Product
                </Link>

                <Link
                  href="/dashboard/manage-products"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Manage Products
                </Link>

                <button
                  onClick={()=>signOut()}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>

              </div>

            </div>

          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={()=>setOpen(!open)}
        >
          <FaBars size={20}/>
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">

          <Link href="/">Home</Link>

          <Link href="/products">Products</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          {!session ? (

            <Link
              href="/login"
              className="bg-black text-white px-4 py-2 rounded text-center"
            >
              Login
            </Link>

          ) : (

            <>
              <Link href="/dashboard/add-product">
                Add Product
              </Link>

              <Link href="/dashboard/manage-products">
                Manage Products
              </Link>

              <button
                onClick={()=>signOut()}
                className="text-red-500 text-left"
              >
                Logout
              </button>
            </>

          )}

        </div>

      )}

    </nav>
  );
}