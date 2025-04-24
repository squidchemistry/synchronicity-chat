'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: { price: number[] };
}

export default function CryptoSection() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,solana',
            sparkline: true,
          },
        }
      );
      setCoins(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-5xl bg-white/5 rounded-2xl p-6 shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Live Crypto Prices & Graphs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-gray-800 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{coin.name} ({coin.symbol.toUpperCase()})</h3>
            <p className="text-green-400 text-lg mt-2">${coin.current_price.toLocaleString()}</p>
            <p className={`mt-1 text-sm ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <div className="w-full mt-4">
              <Line
                data={{
                  labels: Array.from({ length: coin.sparkline_in_7d.price.length }, (_, i) => i),
                  datasets: [
                    {
                      data: coin.sparkline_in_7d.price,
                      borderColor: '#3b82f6',
                      backgroundColor: 'transparent',
                      pointRadius: 0,
                      borderWidth: 2,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: { display: false },
                    y: { display: false },
                  },
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                  },
                }}
                height={100}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
