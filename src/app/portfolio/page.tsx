"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaHome, FaWallet, FaCog, FaSignOutAlt } from "react-icons/fa";

interface Asset {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  price: number;
  logoUrl?: string;
  sparkline: number[];
}

const formatCurrency = (value: number) =>
  `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

export default function PortfolioPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const pathname = usePathname();

  const fetchAssets = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=true"
      );
      const data = await response.json();
      const formattedAssets = data.map((coin: any) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        amount: 0,
        price: coin.current_price,
        logoUrl: coin.image,
        sparkline: coin.sparkline_in_7d.price,
      }));
      setAssets(formattedAssets);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const totalValue = assets.reduce(
    (total, asset) => total + asset.amount * asset.price,
    0
  );

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
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Portfolio Overview
          </h1>
          <p className="text-gray-300 mt-2">
            Real-time data, trends, and insights for your assets.
          </p>
        </header>

        <div className="bg-white/5 p-8 rounded-3xl shadow-lg mb-10 backdrop-blur-md border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">Total Balance</p>
            <h2 className="text-4xl font-bold text-white mt-2">
              {formatCurrency(totalValue)}
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchAssets}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-xl font-medium text-sm shadow-lg"
            >
              Refresh
            </button>
            <button className="border border-white/20 hover:bg-white/10 transition px-6 py-2 rounded-xl font-medium text-sm shadow">
              + Add Asset
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm bg-white/5 rounded-2xl overflow-hidden">
            <thead className="bg-white/10 text-gray-300 uppercase text-xs">
              <tr>
                <th className="text-left px-6 py-4">Asset</th>
                <th className="text-left px-6 py-4">Amount</th>
                <th className="text-left px-6 py-4">Price</th>
                <th className="text-left px-6 py-4">Value</th>
                <th className="text-left px-6 py-4">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {assets.map((asset) => {
                const value = asset.amount * asset.price;
                return (
                  <tr
                    key={asset.id}
                    className="hover:bg-white/10 transition cursor-pointer"
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={asset.logoUrl}
                        alt={asset.name}
                        className="w-7 h-7 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-white">{asset.symbol}</div>
                        <div className="text-gray-400 text-xs">{asset.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{asset.amount}</td>
                    <td className="px-6 py-4">{formatCurrency(asset.price)}</td>
                    <td className="px-6 py-4">{formatCurrency(value)}</td>
                    <td className="px-6 py-4">
                      <div className="w-32 h-10">
                        <Sparklines data={asset.sparkline}>
                          <SparklinesLine color="#7dd3fc" />
                        </Sparklines>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Sidebar button component with routing
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
