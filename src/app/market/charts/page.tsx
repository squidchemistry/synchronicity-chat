"use client";

import React from "react";
import Link from "next/link";

const MarketChartsPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0c29] text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-cyan-400">Market Charts</h1>
      <p className="text-gray-300 mb-8">Interactive charts and historical market data coming soon.</p>

      <Link href="/market">
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
          ← Back to Market Overview
        </button>
      </Link>
    </div>
  );
};

export default MarketChartsPage;
