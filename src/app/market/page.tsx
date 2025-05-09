"use client";

import React from "react";
import Link from "next/link";

const marketSections = [
  {
    title: "Live Prices",
    description: "Real-time prices of major cryptocurrencies like BTC, ETH, and more.",
    href: "/market/live-prices",
  },
  {
    title: "Top Movers",
    description: "Biggest gainers and losers in the market today.",
    href: "/market/top-movers",
  },
  {
    title: "Market Charts",
    description: "Visualize trends with interactive charts and historical data.",
    href: "/market/charts",
  },
];

const LiveMarketPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Live Market Overview
        </h1>
        <p className="text-gray-300 mt-3 text-lg max-w-2xl">
          Stay up-to-date with real-time cryptocurrency market data, trends,
          and insights to help you make informed decisions.
        </p>
      </header>

      {/* Market Navigation Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {marketSections.map(({ title, description, href }) => (
          <MarketCard key={href} title={title} description={description} href={href} />
        ))}
      </section>

      {/* Back Button */}
      <div className="mt-16 text-center">
        <Link href="/dashboard">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold text-white shadow-lg">
            ← Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

const MarketCard = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => (
  <Link href={href}>
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </Link>
);

export default LiveMarketPage;
