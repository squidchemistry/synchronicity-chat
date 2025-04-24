'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Both email and password are required');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Assuming backend returns a token
      localStorage.setItem('authToken', data.token);
      alert('Login successful!');
      // Redirect or update state to logged-in
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-white px-6 py-12">
      <section className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-extrabold text-center text-blue-500 mb-8">Sign In</h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}

        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 px-6 py-3 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-6 py-3 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLogin}
          className={`w-full ${loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'} text-white py-3 rounded-xl font-medium transition-all duration-300`}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <footer className="mt-6 text-center text-gray-400 text-sm">
          <p>
            Don't have an account?{' '}
            <span className="text-blue-400 cursor-pointer hover:underline">Sign Up</span>
          </p>
        </footer>
      </section>
    </main>
  );
}
