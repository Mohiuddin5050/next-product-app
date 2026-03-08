import Link from "next/link";

export default function Hero() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Manage Your Products <br /> Easily & Efficiently
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            A simple platform to add, manage, and explore products with a clean
            dashboard and secure authentication.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              Explore Products
            </Link>

            <Link
              href="/login"
              className="border px-6 py-3 rounded-lg "
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Hero"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}