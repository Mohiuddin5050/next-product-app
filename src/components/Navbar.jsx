import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <Link href="/" className="font-bold text-xl">
          ProductApp
        </Link>
        <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/dashboard/manage-products">Manage Products</Link>
        <Link href="/login">Login</Link>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
