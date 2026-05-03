"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Login to Your Account
        </h2>

        {/* Google Login */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full border p-3 rounded mb-4 text-gray-600 hover:bg-gray-100"
        >
          Continue with Google
        </button>

        {/* Divider */}
        <div className="text-center text-gray-500 mb-4">OR</div>

        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-black border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black border p-3 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded hover:opacity-90"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Extra */}
        <p className="text-sm text-center mt-6 text-gray-500">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => alert("Register page optional")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
