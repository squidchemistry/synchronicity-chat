"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaWallet, FaCog, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const DashboardPage = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-[#1f1d36] border-r border-[#3f3d56] p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <Link
            href="/"
            className="text-3xl font-extrabold text-purple-400 mb-10 block tracking-tight hover:opacity-90 transition"
          >
            Synchronicity
          </Link>
          <nav className="space-y-4">
            <SidebarButton icon={<FaHome />} label="Dashboard" href="/dashboard" currentPath={pathname} />
            <SidebarButton icon={<FaWallet />} label="Portfolio" href="/portfolio" currentPath={pathname} />
            <SidebarButton icon={<FaCog />} label="Settings" href="/settings" currentPath={pathname} />
            <SidebarButton icon={<FaSignInAlt />} label="Sign In" href="/signin" currentPath={pathname} />
            <SidebarButton icon={<FaUserPlus />} label="Sign Up" href="/signup" currentPath={pathname} />
          </nav>
        </div>
        <p className="text-sm text-gray-400">All rights reserved © Synchronicity</p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Track your crypto investments, view live market data, manage your portfolio, and customize your account settings from one place.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard title="View Portfolio" description="Check your current asset holdings and performance." href="/portfolio" />
          <DashboardCard title="Update Settings" description="Change your preferences, currency, and notifications." href="/settings" />
          <DashboardCard title="Live Market" description="Explore live crypto market trends and analytics." href="/market" />
          <DashboardCard title="Sign In" description="Access your account securely." href="/signin" />
          <DashboardCard title="Sign Up" description="Create your account in seconds." href="/signup" />
        </div>
      </main>
    </div>
  );
};

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

function DashboardCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </Link>
  );
}

export default DashboardPage;