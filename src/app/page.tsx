import Link from 'next/link';
import CryptoSection from '../components/CryptoSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <main className="flex flex-col items-center justify-center py-12 px-6 gap-16 text-white">
        {/* Hero Section */}
        <section className="text-center max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-blue-500">Synchronicity</span>
          </h1>
          <p className="text-lg text-gray-300">
            Connect. Chat. Crypto. All in one seamless experience.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go to Dashboard
          </Link>
        </section>

        {/* Crypto Section */}
        <CryptoSection />

      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};