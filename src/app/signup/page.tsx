"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Placeholder for actual sign-up logic
    alert("Sign up clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6">
      <div className="w-full max-w-md bg-[#1f1d36] p-8 rounded-xl shadow-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <button
          onClick={handleSignUp}
          className="w-full bg-green-600 hover:bg-green-700 transition py-2 rounded font-semibold shadow"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link href="/signin" className="text-green-300 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
