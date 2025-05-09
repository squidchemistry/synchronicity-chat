"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaWallet,
  FaCog,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const navItems = [
  { icon: <FaHome />, label: "Dashboard", href: "/dashboard" },
  { icon: <FaWallet />, label: "Portfolio", href: "/portfolio" },
  { icon: <FaCog />, label: "Settings", href: "/settings" },
  { icon: <FaSignInAlt />, label: "Sign In", href: "/signin" },
  { icon: <FaUserPlus />, label: "Sign Up", href: "/signup" },
];

const cards = [
  {
    title: "View Portfolio",
    description: "Check your current asset holdings and performance.",
    href: "/portfolio",
  },
  {
    title: "Update Settings",
    description: "Change your preferences, currency, and notifications.",
    href: "/settings",
  },
  {
    title: "Live Market",
    description: "Explore live crypto market trends and analytics.",
    href: "/market",
  },
  {
    title: "Sign In",
    description: "Access your account securely.",
    href: "/signin",
  },
  {
    title: "Sign Up",
    description: "Create your account in seconds.",
    href: "/signup",
  },
];

const DashboardPage = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-[#1f1d36] border-r border-[#3f3d56] p-6 flex flex-col justify-between shadow-xl">
        <div>
          <Link
            href="/"
            className="text-3xl font-bold text-purple-400 mb-10 block hover:opacity-90 transition-opacity"
          >
            Synchronicity
          </Link>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <SidebarLink
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </nav>
        </div>
        <footer className="text-xs text-gray-500 pt-6 border-t border-[#3f3d56]">
          © {new Date().getFullYear()} Synchronicity. All rights reserved.
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-300 mt-3 text-lg max-w-2xl">
            Manage your crypto investments, explore live markets, and
            personalize your experience.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <DashboardCard
              key={card.href}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

const SidebarLink = ({
  icon,
  label,
  href,
  isActive,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}) => (
  <Link href={href}>
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? "bg-white/10 text-purple-300"
          : "text-white/80 hover:bg-white/5"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  </Link>
);

const DashboardCard = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => (
  <Link href={href}>
    <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-md hover:scale-105 hover:bg-white/10 transition-transform duration-300 cursor-pointer">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </Link>
);

export default DashboardPage;
