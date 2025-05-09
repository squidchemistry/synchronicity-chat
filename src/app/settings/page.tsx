"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaWallet, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function SettingsPage() {
  const pathname = usePathname();
  const [form, setForm] = useState({
    username: "arshverma",
    email: "arsh@example.com",
    notifications: true,
    darkMode: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-[#1f1d36] border-r border-[#3f3d56] p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <Link href="/" className="text-3xl font-extrabold text-purple-400 mb-10 block tracking-tight hover:opacity-90 transition">
            Synchronicity
          </Link>
          <nav className="space-y-4">
            <SidebarButton icon={<FaHome />} label="Dashboard" href="/dashboard" currentPath={pathname} />
            <SidebarButton icon={<FaWallet />} label="Portfolio" href="/portfolio" currentPath={pathname} />
            <SidebarButton icon={<FaCog />} label="Settings" href="/settings" currentPath={pathname} />
          </nav>
        </div>
        <button className="flex items-center gap-3 text-sm px-4 py-3 bg-red-500 hover:bg-red-600 transition rounded-lg font-semibold text-white shadow">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Settings
          </h1>
          <p className="text-gray-300 mt-2">Manage your profile and preferences.</p>
        </header>

        {/* Settings Form */}
        <div className="bg-white/5 p-8 rounded-3xl shadow-xl border border-white/10 max-w-2xl space-y-6 backdrop-blur">
          <div>
            <label className="block mb-2 text-sm text-gray-400">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-400">Enable Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-purple-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-400">Dark Mode</label>
            <input
              type="checkbox"
              name="darkMode"
              checked={form.darkMode}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-purple-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Change Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}

function SidebarButton({
  icon,
  label,
  href,
  currentPath,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  currentPath: string;
}) {
  const isActive = currentPath === href;
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-4 px-4 py-3 w-full rounded-lg transition text-sm font-medium shadow-sm hover:bg-white/10 ${
          isActive ? "bg-white/10 text-purple-300" : "text-white/80"
        }`}
      >
        {icon}
        {label}
      </div>
    </Link>
  );
}
